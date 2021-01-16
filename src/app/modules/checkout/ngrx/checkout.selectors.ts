import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CheckoutStateModel } from "../models/checkout-state.model";

const checkoutFeature = createFeatureSelector<CheckoutStateModel>('checkout');

export const selectDeliveryCharge = createSelector(checkoutFeature, checkoutFeature =>
    checkoutFeature.deliveryCharge || null
)