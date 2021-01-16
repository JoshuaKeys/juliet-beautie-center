import { NovaPoshtaCityModel } from "./nova-poshta-city.model";

export interface DeliveryDetailsModel {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    city: NovaPoshtaCityModel | string;
    division: string;
    country: string;
}