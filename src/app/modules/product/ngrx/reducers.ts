import { createReducer, on } from "@ngrx/store";
import { ProductItemModel } from "../../shared/models/product-item.model";
import { ProductsStateModel } from "../models/products-state.model";
import { fetchProductsSuccess, fetchProductSuccess } from "./actions";

const initialState: ProductsStateModel = null;

const _productReducer = createReducer(initialState,
    on(fetchProductsSuccess, (state, action)=> {
        return {
            ...state,
            productItems: [...action.productItems]
        }
    }),
    on(fetchProductSuccess, (state, action)=> {
        return {
            ...state,
            productDescription: action.product
        }
    })
);

export function productReducer(state, action) {
    return _productReducer(state, action);
}