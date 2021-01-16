import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateModel } from '../models/exchange-rate.model';
import { LiqpaySignatureDataModel } from '../models/liqpay-signature-data.model';

@Injectable({
  providedIn: 'root'
})
export class LiqpayService {
  getSignatureAndData(amount, order_id, description, info): Observable<LiqpaySignatureDataModel> {
    return this.httpClient.get<LiqpaySignatureDataModel>('/api/make-payments', {
      params: new HttpParams()
        .set('amount', amount)
        .set('order_id', order_id)
        .set('description', description)
        .set('info', info)
        .set('result_url', `https://juliet-beautie-center.herokuapp.com/api/fulfil-payments?order_id=${order_id}`)
    });
  }
  getExchangeRates(): Observable<ExchangeRateModel[]> {
    return this.httpClient.get<ExchangeRateModel[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11')
  }
  constructor(private httpClient: HttpClient) { }
}
