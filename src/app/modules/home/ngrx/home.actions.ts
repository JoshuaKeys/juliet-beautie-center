import { createAction, props } from "@ngrx/store";
import { ProductItemModel } from "../../shared/models/product-item.model";

export const assembleProductsRequest = createAction(
    '[HomeComponent] AssembleProductsRequest'
);
export const assembleProductsSuccess = createAction(
    '[HomeEffects] AssembleProductsSuccess',
    props<{bestSelling: ProductItemModel[], featured: ProductItemModel[]}>()
);