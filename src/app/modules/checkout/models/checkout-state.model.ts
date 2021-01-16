import { CountryModel } from "../../shared/models/country.model";
import { LocalDeliveryModel } from "./local-delivery.model";
import { NovaPoshtaCityModel } from "./nova-poshta-city.model";

export interface CheckoutStateModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneCode?: CountryModel;
    phoneNumber?: string;
    localInUkraine?: boolean;
    localDelivery?: LocalDeliveryModel;
    deliveryCharge?: number;
}