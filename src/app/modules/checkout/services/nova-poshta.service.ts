import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NovaPoshtaDivisionModel } from '../../shared/models/nova-poshta-division.model';
import { DeliveryCostModel } from '../models/delivery-cost.model';
import { NovaPoshtaCityModel } from '../models/nova-poshta-city.model';

@Injectable({
  providedIn: 'root'
})
export class NovaPoshtaService {
  getNovaPoshtaCountries(): Observable<NovaPoshtaCityModel[]> {
    return this.httpClient.get<NovaPoshtaCityModel[]>('/api/get-nova-poshta-areas').pipe(
      map(area => area.slice(1))
    )
  }
  getNovaPoshtaDivision(cityRef: string): Observable<NovaPoshtaDivisionModel[]> {
    return this.httpClient.get<NovaPoshtaDivisionModel[]>(`/api/get-nova-poshta-division`, {
      params: new HttpParams().set('cityRef', cityRef)
    })
  }
  calculateDeliveryPrice(cityRecipient, cost, weight, seatsAmount) {
    return this.httpClient.get<DeliveryCostModel[]>(
      '/api/calculate-delivery-cost', {
      params: new HttpParams()
        .set('CityRecipient', cityRecipient)
        .set('Cost', cost)
        .set('Weight', weight)
        .set('SeatsAmount', seatsAmount)
    }
    )
  }
  constructor(private httpClient: HttpClient) { }
}
