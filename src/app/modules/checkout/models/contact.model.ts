import { CountryModel } from "../../shared/models/country.model";

export interface ContactModel {
    firstName: string;
    lastName: string;
    email: string;
    phoneCode: CountryModel;
    phoneNumber: string;
}