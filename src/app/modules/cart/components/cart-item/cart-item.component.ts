import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemModel } from 'src/app/modules/shared/models/cart.model';
import { ProductItemModel } from 'src/app/modules/shared/models/product-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItemModel;
  @Output() removeCartItem = new EventEmitter<CartItemModel>();
  constructor() { }

  ngOnInit(): void {
  }
  removeItem() {
    this.removeCartItem.emit(this.cartItem);
  }

}
