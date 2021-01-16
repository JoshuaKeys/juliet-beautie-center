import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international-delivery',
  templateUrl: './international-delivery.component.html',
  styleUrls: ['./international-delivery.component.scss']
})
export class InternationalDeliveryComponent implements OnInit {


  ngOnInit(): void {
  }
  goBack() {
    this.locationService.back();
  }

  constructor(private locationService: Location) { }
}
