import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/modules/shared/models/cart.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { CartUpdateModel } from '../../models/cart-update.model';
import { removeCartItemRequest, updateCartQtyRequest } from '../../ngrx/cart.actions';
import { selectCartItems, selectTotalItems } from '../../ngrx/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Observable<CartItemModel[]>;
  subTotal: Observable<number>;
  cartItems: Observable<CartItemModel[]>;
  flatRate = 1.99;
  constructor(private cartService: CartService, private store: Store) { }

  ngOnInit(): void {
    // this.items = this.cartService.getItems().items;
    this.cartItems = this.store.select(selectCartItems);
    this.subTotal = this.store.select(selectTotalItems);
    this.items = this.store.select(selectCartItems)
  }

  removeItem(product: CartItemModel) {
    this.store.dispatch(removeCartItemRequest({ product }));
  }
  updateCartQty(updateItem: CartUpdateModel) {
    this.store.dispatch(updateCartQtyRequest({ updateItem }))
  }


}
