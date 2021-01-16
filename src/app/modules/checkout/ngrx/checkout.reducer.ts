import { createReducer, on } from "@ngrx/store";
import { CheckoutStateModel } from "../models/checkout-state.model";
import { confirmLocal, setContactDetails, setDeliveryCost, setLocalDeliveryDetails } from "./checkout.actions";

const initialState: CheckoutStateModel = {};
const _checkout = createReducer(initialState,
    on(setContactDetails, (state, { contactDetails: { firstName, lastName, email, phoneCode, phoneNumber } }) => {
        return {
            ...state,
            firstName,
            lastName,
            email,
            phoneCode,
            phoneNumber
        }
    }),
    on(confirmLocal, (state, action) => {
        return {
            ...state,
            localInUkraine: true
        }
    }),
    on(setLocalDeliveryDetails, (state, action) => {
        return {
            ...state,
            localDelivery: action.localDeliveryDetails
        }
    }),
    on(setDeliveryCost, (state, action) => {
        return {
            ...state,
            deliveryCharge: action.cost
        }
    })
);

export function checkoutReducer(state, action) {
    return _checkout(state, action);
}