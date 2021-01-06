import { ProductItemModel } from "../../shared/models/product-item.model";

export interface HomeStateModel {
    featuredProducts: ProductItemModel[];
    bestSellingProducts: ProductItemModel[];
}