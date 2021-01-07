import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToBasketRequest } from 'src/app/modules/cart/ngrx/cart.actions';
import { ProductItemModel } from 'src/app/modules/shared/models/product-item.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { fetchProductRequest } from '../../ngrx/actions';
import { selectProduct, selectProductDescription } from '../../ngrx/selectors';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  qty = 1;
  product: ProductItemModel;
  recommendedProducts$: Observable<ProductItemModel[]>;
  addToCart() {
    this.store.dispatch(addToBasketRequest({ product: this.product, qty: this.qty }));
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private productService: ProductsService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    const category = this.activatedRoute.snapshot.queryParams.category;
    this.store.dispatch(fetchProductRequest({ productId: id }))
    this.store.select(selectProductDescription, { id }).subscribe(
      product => {
        this.product = product;
      }
    )
    console.log('helllll')
    this.getRecommendedProducts(id, category);
  }

  getRecommendedProducts(id, category) {
    this.recommendedProducts$ = this.productService.fetchRecommendedProducts(id, category);
    this.recommendedProducts$.subscribe(console.log)
  }

}
