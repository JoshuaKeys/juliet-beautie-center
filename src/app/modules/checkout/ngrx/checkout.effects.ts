import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs/operators";
import { saveOrderDetails } from "./checkout.actions";

@Injectable({
    providedIn: 'root'
})
export class CheckoutEffects {
    saveOrderDetails$ = createEffect(() => this.actions$.pipe(
        ofType(saveOrderDetails),
        tap(action => {
            localStorage.setItem('orderDetails', action.info);
            action.orderForm.submit();
        })
    ), {dispatch: false})

    constructor(private actions$: Actions) {}
}