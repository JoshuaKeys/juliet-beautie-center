import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetchProductRequest, fetchProductsRequest, fetchProductsSuccess, fetchProductSuccess } from "./actions";
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators'
import { ProductsService } from "../services/products.service";
import { Store } from "@ngrx/store";
import { selectProduct, selectProducts } from "./selectors";
import { of } from "rxjs";


@Injectable()
export class ProductsEffects {
  fetchProductsRequest$ = createEffect(() => this.actions$.pipe(
    ofType(fetchProductsRequest),
    withLatestFrom(this.store.select(selectProducts)),
    mergeMap(([action, productItems]) => {
      if (!productItems || !productItems.length) {
        return this.productsService.fetchProducts().pipe(
          map(productItems => fetchProductsSuccess({ productItems }))
        )
      }
      return of(fetchProductsSuccess({ productItems }))
    })
  ));
  fetchProductRequest$ = createEffect(() => this.actions$.pipe(
    ofType(fetchProductRequest),
    withLatestFrom(this.store.select(selectProducts)),
    mergeMap(([action, products]) => {
      const product = products.find(product => product._id === action.productId);
      if (product) {
        return of(fetchProductSuccess({ product }))
      }
      return this.productsService.fetchProduct(action.productId).pipe(
        map(product => fetchProductSuccess({ product }))
      )
    })
  ))

  constructor(private actions$: Actions, private productsService: ProductsService, private store: Store) { }
}
