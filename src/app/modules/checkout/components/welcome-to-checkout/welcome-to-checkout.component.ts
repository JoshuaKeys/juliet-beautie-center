import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/modules/shared/models/cart.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';

@Component({
  selector: 'app-welcome-to-checkout',
  templateUrl: './welcome-to-checkout.component.html',
  styleUrls: ['./welcome-to-checkout.component.scss']
})
export class WelcomeToCheckoutComponent implements OnInit {
  cartItems: CartItemModel[];
  totalItems: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems().items;
    this.totalItems = this.cartService.getTotal()
  }

}
