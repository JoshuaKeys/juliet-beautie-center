import { createReducer, on } from "@ngrx/store";
import { ProductItemModel } from "../../shared/models/product-item.model";
import { HomeStateModel } from "../models/home-state.model";
import { assembleProductsSuccess } from "./home.actions";


const initialHomeState: HomeStateModel = null;

const _homeReducer = createReducer(initialHomeState,
    on(assembleProductsSuccess, (state, {bestSelling, featured})=> {
        return {
            ...state,
            featuredProducts: featured,
            bestSellingProducts: bestSelling
        }
    })
);

export function homeReducer(state, action) {
    return _homeReducer(state, action);
}