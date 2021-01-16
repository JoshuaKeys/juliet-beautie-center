import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemModel } from 'src/app/modules/shared/models/cart.model';
import { CountryModel } from 'src/app/modules/shared/models/country.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { CountryService } from 'src/app/modules/shared/services/country.service';
import { ContactModel } from '../../models/contact.model';
import { setContactDetails } from '../../ngrx/checkout.actions';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  cartItems: CartItemModel[];
  countries: Observable<CountryModel[]>;

  contactForm: FormGroup;


  ngOnInit(): void {
    this.countries = this.countryCodes.getCountryCodes();
    this.countries.subscribe(countries => {
      const ukrIdx = countries.findIndex(country => country.code === '+380');
      this.contactForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneCode: new FormControl(countries[ukrIdx]),
        phoneNumber: new FormControl('', [Validators.required])
      })
    })
  }
  setContact() {
    const contactDetails: ContactModel = this.contactForm.value;
    this.store.dispatch(setContactDetails({ contactDetails }))
  }

  constructor(private countryCodes: CountryService, private store: Store) { }

}
