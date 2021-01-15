import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { NovaPoshtaDivisionModel } from 'src/app/modules/shared/models/nova-poshta-division.model';
import { DeliveryCostModel } from '../../models/delivery-cost.model';
import { LiqpaySignatureDataModel } from '../../models/liqpay-signature-data.model';
import { NovaPoshtaCityModel } from '../../models/nova-poshta-city.model';
import { LiqpayService } from '../../services/liqpay.service';
import { NovaPoshtaService } from '../../services/nova-poshta.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-local-delivery',
  templateUrl: './local-delivery.component.html',
  styleUrls: ['./local-delivery.component.scss']
})
export class LocalDeliveryComponent implements OnInit {
  areas: Observable<NovaPoshtaCityModel[]>;
  divisions: NovaPoshtaDivisionModel[];
  deliveryCost: DeliveryCostModel;
  novaPoshtaForm: FormGroup;
  signatureAndData: Observable<LiqpaySignatureDataModel>;
  submitForm: FormGroup;
  ngOnInit(): void {
    const orderId = v4();
    this.signatureAndData = this.liqpayService.getSignatureAndData(20, orderId, 'Payment for goods on website')
    this.novaPoshtaForm = new FormGroup({
      city: new FormControl(''),
      division: new FormControl('')
    })
    this.submitForm = new FormGroup({})
    this.areas = this.novaPoshtaService.getNovaPoshtaCountries();
    this.novaPoshtaForm.get('city').valueChanges.pipe(
      mergeMap((value: string) => {
        const valueObj: NovaPoshtaCityModel = JSON.parse(value);

        this.novaPoshtaService.calculateDeliveryPrice(valueObj.AreasCenter, 2000, 0.25, 1).pipe(
          tap(price => {
            this.deliveryCost = price[0]
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
  constructor(private novaPoshtaService: NovaPoshtaService, private liqpayService: LiqpayService) { }
}
