import { createReducer, on } from "@ngrx/store";
import { CartItemModel } from "../../shared/models/cart.model";
import { CartStateModel } from "../models/cart-state.model";
import { addToBasketSuccess, loadCartSuccess, removeCartItemSuccess, updateCartQtySuccess } from "./cart.actions";

const cartInitialState: CartStateModel = null;

const _cartReducer = createReducer(
    cartInitialState,
    on(loadCartSuccess, addToBasketSuccess, removeCartItemSuccess, (state, action) => {
        return {
            ...state,
            items: action.items
        }
    }),
    on(updateCartQtySuccess, (state, { updateItem }) => {
        const cartItems = [...state.items];
        const idx = cartItems.findIndex(cartItem => cartItem._id === updateItem.cartItem._id);
        console.log(cartItems[idx].qty, updateItem.newQty)
        const cartItemsCopy: CartItemModel = { ...cartItems[idx] };
        cartItemsCopy.qty = updateItem.newQty;
        cartItems[idx] = cartItemsCopy;
        return {
            ...state,
            items: cartItems
        }
    })
);

export function cartReducer(state, action) {
    return _cartReducer(state, action);
}