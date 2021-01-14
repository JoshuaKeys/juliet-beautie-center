import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryModel } from 'src/app/modules/shared/models/country.model';

@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.component.html',
  styleUrls: ['./phone-numbers.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PhoneNumbersComponent), multi: true }
  ]
})
export class PhoneNumbersComponent implements OnInit, ControlValueAccessor {
  @Input() countries: CountryModel[];
  selectedCountry: CountryModel;
  selectedElement: HTMLDivElement;
  onChangeFn: (value) => void;
  onTouchFn: () => void;
  opened = false;
  @ViewChild('dropdown') dropDown: ElementRef<HTMLDivElement>;
  constructor() { }

  writeValue(value: CountryModel) {
    this.selectedCountry = value;
  }
  registerOnChange(change: (value: string) => void) {
    this.onChangeFn = change;
  }
  registerOnTouched(touchFn: any) {
    this.onTouchFn = touchFn;
  }
  ngOnInit(): void {
    // this.countries.subscribe(countries => {
    const ukraineIndex = this.countries.findIndex(country => country.code === '+380')

    this.selectedCountry = this.countries[ukraineIndex]
    // })
  }
  onBlur() {
    if (this.opened) {
      this.toggleOPenedState();
    }
  }
  select(country: CountryModel, event: any) {
    if (this.selectedElement) {
      this.selectedElement.classList.remove('phone-numbers__input-dropdown-item-selected');
    }

    this.selectedElement = event.currentTarget;
    this.selectedElement.classList.add('phone-numbers__input-dropdown-item-selected');
    this.selectedCountry = country;
    this.toggleOPenedState();
    this.onChangeFn(this.selectedCountry);
  }
  test() {
    alert('hello world');
  }
  toggleOPenedState() {
    if (!this.opened && this.selectedElement) {
      this.selectedElement.scrollIntoView();
      console.log(this.selectedElement.scrollTop)
    }
    this.opened = !this.opened;
  }

}
