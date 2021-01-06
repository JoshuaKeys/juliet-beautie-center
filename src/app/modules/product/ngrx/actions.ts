import { createAction, props } from "@ngrx/store";
import { ProductItemModel } from "../../shared/models/product-item.model";

export const fetchProductsRequest = createAction(
    '[ProductListingComponent] fetchProductsRequest'
);
export const fetchProductsSuccess = createAction(
    '[ProductEffects] fetchProductsSuccess',
    props<{productItems: ProductItemModel[]}>()
);
export const fetchProductRequest = createAction(
    '[ProductDescriptionComponent] FetchProductRequest',
    props<{productId: string}>()
);
export const fetchProductSuccess = createAction(
    '[ProductEffects] FetchProductSuccess',
    props<{product: ProductItemModel}>()
)