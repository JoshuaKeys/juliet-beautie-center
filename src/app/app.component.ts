import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCartRequest } from './modules/cart/ngrx/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'juliet-beauty-center';

  constructor(private store: Store) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('Check for ng onChanges')
    console.log(changes);
  }
  ngOnInit() {
    console.log('check for ng onInit')
    this.store.dispatch(loadCartRequest());
  }
}
