import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiqpaySignatureDataModel } from '../models/liqpay-signature-data.model';

@Injectable({
  providedIn: 'root'
})
export class LiqpayService {
  getSignatureAndData(amount, order_id, description): Observable<LiqpaySignatureDataModel> {
    return this.httpClient.get<LiqpaySignatureDataModel>('/api/make-payments', {
      params: new HttpParams()
        .set('amount', amount)
        .set('order_id', order_id)
        .set('description', description)
    })
  }
  constructor(private httpClient: HttpClient) { }
}
