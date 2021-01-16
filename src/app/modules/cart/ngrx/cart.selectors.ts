import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartModel } from "../../shared/models/cart.model";

const cartFeature = createFeatureSelector<CartModel>('cart');

export const selectCartItems = createSelector(cartFeature, feature => feature.items)
export const selectTotalItems = createSelector(cartFeature, feature => {
  let total = 0;
  const cartItems = feature.items;
  if (!cartItems) {
    return 0;
  }
  cartItems.forEach(item => {
    total += +item.productPrice * item.qty;
  });
  return total;
})