import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/modules/shared/models/cart.model';
import { CountryModel } from 'src/app/modules/shared/models/country.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { CountryService } from 'src/app/modules/shared/services/country.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  cartItems: CartItemModel[];
  countries: Observable<CountryModel[]>;

  contactForm: FormGroup;
  constructor(private cartService: CartService, private countryCodes: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryCodes.getCountryCodes();
    this.countries.subscribe(countries => {
      const ukrIdx = countries.findIndex(country => country.code === '+380');
      this.contactForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        phoneCode: new FormControl(countries[ukrIdx]),
        phoneNumber: new FormControl('')
      })
    })
  }

}
