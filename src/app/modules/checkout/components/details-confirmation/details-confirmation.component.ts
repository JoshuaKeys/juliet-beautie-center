import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { selectTotalItems } from 'src/app/modules/cart/ngrx/cart.selectors';
import { v4 } from 'uuid'
import { DeliveryDetailsModel } from '../../models/delivery-details.model';
import { LiqpaySignatureDataModel } from '../../models/liqpay-signature-data.model';
import { selectDeliveryCharge, selectDeliveryDetails } from '../../ngrx/checkout.selectors';
import { LiqpayService } from '../../services/liqpay.service';
@Component({
  selector: 'app-details-confirmation',
  templateUrl: './details-confirmation.component.html',
  styleUrls: ['./details-confirmation.component.scss']
})
export class DetailsConfirmationComponent implements OnInit {
  firstName = "Joshua";
  lastName = 'Oguma';
  email = 'joshua.oguma@outlook.com'
  phoneNumber = '+380991702955';
  country = 'Ukraine';
  city = 'Kharkiv'
  deliveryMethod = 'Nova Poshta';
  address = "NovaPoshta Otdelenia 11"
  deliveryPrice: Observable<number>;
  basketTotal: Observable<number>;

  signatureAndData: Observable<LiqpaySignatureDataModel>;
  deliveryDetails: Observable<DeliveryDetailsModel>

  ngOnInit(): void {
    this.deliveryPrice = this.store.select(selectDeliveryCharge);
    this.basketTotal = this.store.select(selectTotalItems);
    this.deliveryDetails = this.store.select(selectDeliveryDetails);
    this.deliveryDetails.subscribe(console.log)
    this.deliveryPrice.pipe(
      withLatestFrom(this.basketTotal),
      mergeMap(([price, basketTotal]) => this.deliveryDetails.pipe(
        tap(deliveryDetails => {
          const orderId = v4();
          const info = JSON.stringify(deliveryDetails);
          this.signatureAndData = this.liqpayService.getSignatureAndData(price + basketTotal, orderId, 'Payment for goods on website', info);
        })
      ))
    ).subscribe();
  }
  constructor(private liqpayService: LiqpayService, private store: Store) { }
}
