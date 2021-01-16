import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { NovaPoshtaDivisionModel } from 'src/app/modules/shared/models/nova-poshta-division.model';
import { DeliveryCostModel } from '../../models/delivery-cost.model';
import { LiqpaySignatureDataModel } from '../../models/liqpay-signature-data.model';
import { NovaPoshtaCityModel } from '../../models/nova-poshta-city.model';
import { LiqpayService } from '../../services/liqpay.service';
import { NovaPoshtaService } from '../../services/nova-poshta.service';
import { v4 } from 'uuid';
import { Store } from '@ngrx/store';
import { LocalDeliveryModel } from '../../models/local-delivery.model';
import { setDeliveryCost, setLocalDeliveryDetails } from '../../ngrx/checkout.actions';
import { ExchangeRateModel } from '../../models/exchange-rate.model';

@Component({
  selector: 'app-local-delivery',
  templateUrl: './local-delivery.component.html',
  styleUrls: ['./local-delivery.component.scss']
})
export class LocalDeliveryComponent implements OnInit {
  areas: Observable<NovaPoshtaCityModel[]>;
  divisions: NovaPoshtaDivisionModel[];
  deliveryCost: number;
  novaPoshtaForm: FormGroup;
  signatureAndData: Observable<LiqpaySignatureDataModel>;
  submitForm: FormGroup;
  ngOnInit(): void {
    this.novaPoshtaForm = new FormGroup({
      city: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required)
    })
    this.submitForm = new FormGroup({})
    this.areas = this.novaPoshtaService.getNovaPoshtaCountries();
    this.novaPoshtaForm.get('city').valueChanges.pipe(
      mergeMap((value: string) => {
        const valueObj: NovaPoshtaCityModel = JSON.parse(value);

        this.liqpayService.getExchangeRates().pipe(
          mergeMap(exchangeRates => {
            const amountInDollars = 29.46;
            const amountInHryvnia = this.calculateAmountInHryvnia(amountInDollars, exchangeRates)
            return this.novaPoshtaService.calculateDeliveryPrice(valueObj.AreasCenter, amountInHryvnia, 0.25, 1).pipe(
              map((deliveryCost: DeliveryCostModel[]) => {
                const deliveryCostInDollars = this.calculateAmountInDollars(deliveryCost[0].Cost, exchangeRates);
                this.deliveryCost = deliveryCostInDollars;
                this.store.dispatch(setDeliveryCost({ cost: this.deliveryCost }))
              })
            )
          })
        ).subscribe()
        return this.novaPoshtaService.getNovaPoshtaDivision(valueObj.AreasCenter);
      }),
      tap(divisions => {
        this.divisions = divisions;
      })
    ).subscribe();
  }
  process(area) {
    return JSON.stringify(area);
  }
  getDollarRate(exchangeRates: ExchangeRateModel[]) {
    return exchangeRates.find(exchangeRate => exchangeRate.ccy === 'USD')
  }
  calculateAmountInHryvnia(amountInDollars: number, exchangeRates: ExchangeRateModel[]) {
    const dollarRate = this.getDollarRate(exchangeRates);
    return +dollarRate.buy * amountInDollars;
  }
  calculateAmountInDollars(amountInHryvnia: number, exchangeRates: ExchangeRateModel[]) {
    const dollarRate = this.getDollarRate(exchangeRates);
    return amountInHryvnia / +dollarRate.buy;
  }
  setOrderDetails() {
    const division = this.novaPoshtaForm.value.division;
    const city = JSON.parse(this.novaPoshtaForm.value.city);
    this.store.dispatch(setLocalDeliveryDetails({ localDeliveryDetails: { division, city } }));
  }
  constructor(
    private novaPoshtaService: NovaPoshtaService,
    private liqpayService: LiqpayService,
    private store: Store
  ) { }
}
