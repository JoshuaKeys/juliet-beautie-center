import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  getCountryCodes() {
    return this.httpClient.get<any[]>('https://restcountries.eu/rest/v2/all').pipe(
      map(items => {
        return items.map(item => {
          return {
            name: item.name,
            code: '+'+item.callingCodes[0],
            flag: item.flag
          }
        })
      })
    )
  }
  constructor(private httpClient: HttpClient) { }
}
