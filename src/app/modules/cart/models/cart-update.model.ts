import { CartItemModel } from "../../shared/models/cart.model";

export interface CartUpdateModel {
    newQty: number;
    cartItem: CartItemModel;
}