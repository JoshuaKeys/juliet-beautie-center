import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 } from 'uuid'
import { LiqpaySignatureDataModel } from '../../models/liqpay-signature-data.model';
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
  deliveryPrice = 3.50;
  basketTotal = 20.59;

  signatureAndData: Observable<LiqpaySignatureDataModel>;

  ngOnInit(): void {
    const orderId = v4();
    this.signatureAndData = this.liqpayService.getSignatureAndData(this.deliveryPrice, orderId, 'Payment for goods on website');
  }
  constructor(private liqpayService: LiqpayService) { }
}
