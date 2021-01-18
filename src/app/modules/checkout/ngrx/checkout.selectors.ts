import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CheckoutStateModel } from "../models/checkout-state.model";

const checkoutFeature = createFeatureSelector<CheckoutStateModel>('checkout');

export const selectDeliveryCharge = createSelector(checkoutFeature, checkoutFeature =>
    checkoutFeature.deliveryCharge || null
);
export const selectFirstName = createSelector(checkoutFeature, feature => {
    if (!Object.keys(feature).length) {
        return null;
    }
    return {
        firstName: feature.firstName
    }
});
export const selectLocalDelivery = createSelector(checkoutFeature, feature => {
    if (!Object.keys(feature).length) {
        return null;
    }
    return {
        isLocalDelivery: feature.localInUkraine
    }
});
export const selectDeliveryDetails = createSelector(checkoutFeature, feature => {
    if (!Object.keys(feature).length) {
        return null
    }

    return {
        firstName: feature.firstName,
        lastName: feature.lastName,
        email: feature.email,
        phoneNumber: feature.phoneCode.code + feature.phoneNumber,
        country: feature.localInUkraine && 'Ukraine',
        city: feature.localDelivery.city && feature.localDelivery.city.DescriptionRu,
        division: feature.localDelivery.division && feature.localDelivery.division['DescriptionRu']
    }
})