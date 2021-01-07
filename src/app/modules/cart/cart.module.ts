import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHomeComponent } from './components/cart-home/cart-home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './ngrx/cart.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './ngrx/cart.effects';

const cartRoutes: Routes = [
  {
    path: '',
    component: CartHomeComponent,
    children: [
      {
        path: 'bag',
        component: CartComponent
      }
    ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'order-confirmation',
        component: OrderConfirmationComponent
      }
    ]
  }
]


@NgModule({
  declarations: [CartHomeComponent, CartItemComponent, CartComponent, CheckoutComponent, OrderConfirmationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(cartRoutes),
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects])

  ]
})
export class CartModule { }
