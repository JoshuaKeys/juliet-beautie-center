import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { confirmLocal } from '../../ngrx/checkout.actions';

@Component({
  selector: 'app-location-question',
  templateUrl: './location-question.component.html',
  styleUrls: ['./location-question.component.scss']
})
export class LocationQuestionComponent implements OnInit {

  ngOnInit(): void {
  }
  confirmLocalResidence() {
    this.store.dispatch(confirmLocal())
  }
  constructor(private store: Store) { }
}
