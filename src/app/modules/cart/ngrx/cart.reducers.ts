import { createReducer, on } from "@ngrx/store";
import { CartStateModel } from "../models/cart-state.model";
import { addToBasketSuccess, loadCartSuccess, removeCartItemSuccess } from "./cart.actions";

const cartInitialState: CartStateModel = null;

const _cartReducer = createReducer(
    cartInitialState,
    on(loadCartSuccess, addToBasketSuccess, removeCartItemSuccess, (state, action)=> {
        return {
            ...state,
            items: action.items
        }
    })
);

export function cartReducer(state, action) {
    return _cartReducer(state, action);
}