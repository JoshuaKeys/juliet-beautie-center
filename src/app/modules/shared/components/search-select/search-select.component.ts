import { ChangeDetectionStrategy, Component, forwardRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NovaPoshtaDivisionModel } from '../../models/nova-poshta-division.model';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SearchSelectComponent), multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSelectComponent implements OnInit, ControlValueAccessor, OnChanges {
  @Input() divisions: NovaPoshtaDivisionModel[];
  localCopy: NovaPoshtaDivisionModel[];
  filteredCopy: NovaPoshtaDivisionModel[];
  selected: NovaPoshtaDivisionModel;
  opened: boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.divisions)
  }

  writeValue(value: any) {
    console.log(value);
  }
  registerOnChange(change: any) {

  }
  registerOnTouched(change: any) {

  }
  openDropdown() {
    if (!this.opened) {
      this.toggleOpened();
    }
  }
  toggleOpened() {
    this.opened = !this.opened;
  }
  filterLocalCopy(event: KeyboardEvent) {
    this.filteredCopy = this.localCopy.filter(item => {
      console.log(event.target['value'])
      return item.DescriptionRu.toLowerCase().match(event.target['value'].toLowerCase())
    })
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    this.localCopy = simpleChanges.divisions.currentValue
    this.filteredCopy = simpleChanges.divisions.currentValue
  }
  select(division: NovaPoshtaDivisionModel) {
    this.selected = division;
    this.toggleOpened();
  }
}
