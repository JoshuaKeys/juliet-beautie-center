import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToBasketRequest } from 'src/app/modules/cart/ngrx/cart.actions';
import { ProductItemModel } from 'src/app/modules/shared/models/product-item.model';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { fetchProductRequest } from '../../ngrx/actions';
import { selectProduct, selectProductDescription } from '../../ngrx/selectors';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  qty = 1;
  product: ProductItemModel;
  addToCart() {
    this.store.dispatch(addToBasketRequest({product: this.product, qty: this.qty}));
  }
  constructor(private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(fetchProductRequest({productId: id}))
    this.store.select(selectProductDescription, {id}).subscribe(
      product => {
        this.product = product;
      }
    )
  }

}
