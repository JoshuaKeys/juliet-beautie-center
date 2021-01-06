import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductItemModel } from 'src/app/modules/shared/models/product-item.model';
import { assembleProductsRequest } from '../../ngrx/home.actions';
import { selectBestSellingProducts, selectFeaturedProducts } from '../../ngrx/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts$: Observable<ProductItemModel[]>;
  bestSellingProducts$: Observable<ProductItemModel[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(assembleProductsRequest())
    this.featuredProducts$ = this.store.select(selectFeaturedProducts);
    this.bestSellingProducts$ = this.store.select(selectBestSellingProducts);
  }

}
