import { createAction, props } from "@ngrx/store";
import { CartItemModel, CartModel } from "../../shared/models/cart.model";
import { ProductItemModel } from "../../shared/models/product-item.model";
import { CartStateModel } from "../models/cart-state.model";

export const loadCartRequest = createAction(
    '[AppComponent] LoadCartRequest'
);
export const loadCartSuccess = createAction(
    '[CartEffects] LoadCartSuccess',
    props<CartModel>()
);
export const addToBasketRequest = createAction(
    '[ProductDescriptionComponent] AddToBasketRequest',
    props<{product: ProductItemModel, qty: number}>()
);
export const addToBasketSuccess = createAction(
    '[CartEffects] AddToBasketSuccess',
    props<CartModel>()
);
export const removeCartItemRequest = createAction(
    '[CartComponent] RemoveCartItemRequest',
    props<{product: CartItemModel}>()
);
export const removeCartItemSuccess = createAction(
    '[CartEffects] RemoveCartItemSuccess',
    props<CartModel>()
)