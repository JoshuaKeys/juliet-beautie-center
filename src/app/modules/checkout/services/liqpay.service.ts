import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiqpaySignatureDataModel } from '../models/liqpay-signature-data.model';

@Injectable({
  providedIn: 'root'
})
export class LiqpayService {
  getSignatureAndData(): Observable<LiqpaySignatureDataModel> {
    return this.httpClient.get<LiqpaySignatureDataModel>('/api/make-payments')
  }
  constructor(private httpClient: HttpClient) { }
}
