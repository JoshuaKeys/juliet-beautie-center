import { NovaPoshtaCityModel } from "./nova-poshta-city.model";

export interface LocalDeliveryModel {
    city: NovaPoshtaCityModel;
    division: string
}