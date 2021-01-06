import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/modules/shared/models/cart.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { removeCartItemRequest } from '../../ngrx/cart.actions';
import { selectCartItems, selectTotalItems } from '../../ngrx/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Observable<CartItemModel[]>;
  subTotal: Observable<number>;
  flatRate = 1.99;
  constructor(private cartService: CartService, private store: Store) { }

  ngOnInit(): void {
    // this.items = this.cartService.getItems().items;
    this.subTotal = this.store.select(selectTotalItems);
    this.items = this.store.select(selectCartItems)
  }

  removeItem(product: CartItemModel) {
    this.store.dispatch(removeCartItemRequest({product}));
  }


}
