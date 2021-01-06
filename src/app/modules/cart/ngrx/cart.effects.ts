import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { CartItemModel, CartModel } from "../../shared/models/cart.model";
import { CartService } from "../../shared/services/cart.service";
import { addToBasketRequest, addToBasketSuccess, loadCartRequest, loadCartSuccess, removeCartItemRequest, removeCartItemSuccess } from "./cart.actions";

@Injectable()
export class CartEffects {
    loadCartRequest$ = createEffect(()=> this.actions$.pipe(
        ofType(loadCartRequest),
        map(action => {
            const items: CartModel = this.cartService.getItems();
            return loadCartSuccess(items)
        })
    ))
    addToBasketRequest$ = createEffect(() => this.actions$.pipe(
        ofType(addToBasketRequest),
        map(({product, qty}) => {
            this.cartService.addItem(product, qty);
            const items: CartModel = this.cartService.getItems();
            return addToBasketSuccess(items)
        })
    ));
    removeCartItemRequest$ = createEffect(() => this.actions$.pipe(
        ofType(removeCartItemRequest),
        map(action => {
            const items = this.cartService.removeItem(action.product);
            return removeCartItemSuccess(items);
        })
    ))
    constructor(private actions$: Actions, private cartService: CartService) {}
}