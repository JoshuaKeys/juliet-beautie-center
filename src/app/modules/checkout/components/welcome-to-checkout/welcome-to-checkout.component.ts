import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/modules/shared/models/cart.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { selectDeliveryCharge } from '../../ngrx/checkout.selectors';

@Component({
  selector: 'app-welcome-to-checkout',
  templateUrl: './welcome-to-checkout.component.html',
  styleUrls: ['./welcome-to-checkout.component.scss']
})
export class WelcomeToCheckoutComponent implements OnInit {
  cartItems: CartItemModel[];
  totalItems: number;
  deliveryCharge: Observable<number>;


  ngOnInit(): void {
    this.cartItems = this.cartService.getItems().items;
    this.totalItems = this.cartService.getTotal()
    this.deliveryCharge = this.store.select(selectDeliveryCharge)
  }


  constructor(private cartService: CartService, private store: Store) { }

}
