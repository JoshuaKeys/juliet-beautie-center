import { createAction, props } from "@ngrx/store";
import { ContactModel } from "../models/contact.model";
import { LocalDeliveryModel } from "../models/local-delivery.model";

export const setContactDetails = createAction(
    '[LocalDeliveryComponent] setContactDetails',
    props<{ contactDetails: ContactModel }>()
);

export const confirmLocal = createAction(
    '[LocationQuestionComponent] cofirmLocal'
);

export const setLocalDeliveryDetails = createAction(
    '[LocalDeliveryComponent] setOrderDetails',
    props<{ localDeliveryDetails: LocalDeliveryModel }>()
);
export const setDeliveryCost = createAction(
    '[LocalDeliveryComponent] setDeliveryCost',
    props<{ cost: number }>()
);
export const saveOrderDetails = createAction(
    '[DeliveryConfirmationComponent] saveOrderDetails',
    props<{orderForm: HTMLFormElement, info: string}>()
)