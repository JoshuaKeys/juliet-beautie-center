import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductItemModel } from "../../shared/models/product-item.model";
import { ProductsStateModel } from "../models/products-state.model";

export const selectFeature = createFeatureSelector<ProductsStateModel>('products');
export const selectProducts = createSelector(selectFeature, feature => {
    return feature ? feature.productItems: [];
});
export const selectProduct = createSelector(selectProducts, (products, {id}) => {
    return products.find(product => product._id === id )
});
export const selectProductDescription = createSelector(selectFeature, feature => feature && feature.productDescription || null);