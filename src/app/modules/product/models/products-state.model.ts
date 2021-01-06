import { ProductItemModel } from "../../shared/models/product-item.model";

export interface ProductsStateModel {
    productItems: ProductItemModel[];
    productDescription: ProductItemModel
}