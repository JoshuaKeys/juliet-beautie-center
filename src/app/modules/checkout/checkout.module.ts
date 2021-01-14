import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeToCheckoutComponent } from './components/welcome-to-checkout/welcome-to-checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { PhoneNumbersComponent } from './components/phone-numbers/phone-numbers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { LocationQuestionComponent } from './components/location-question/location-question.component';
import { LocalDeliveryComponent } from './components/local-delivery/local-delivery.component';
import { InternationalDeliveryComponent } from './components/international-delivery/international-delivery.component';
import { PaymentComponent } from './components/payment/payment.component';

const checkoutRoutes: Routes = [
  {
    path: '',
    component: WelcomeToCheckoutComponent,
    children: [
      {
        path: '',
        component: ContactInfoComponent
      }, {
        path: 'delivery-options',
        component: DeliveryInfoComponent
      }, {
        path: 'location-question',
        component: LocationQuestionComponent
      }, {
        path: 'local-delivery',
        component: LocalDeliveryComponent
      }, {
        path: 'international-delivery',
        component: InternationalDeliveryComponent
      }
    ]
  }
]

@NgModule({
  declarations: [WelcomeToCheckoutComponent, HeaderComponent, SignInComponent, ContactInfoComponent, PhoneNumbersComponent, DeliveryInfoComponent, LocationQuestionComponent, LocalDeliveryComponent, InternationalDeliveryComponent, PaymentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(checkoutRoutes),

  ],
  exports: [
    RouterModule
  ]
})
export class CheckoutModule { }
