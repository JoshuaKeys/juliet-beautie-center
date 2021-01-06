export interface CartModel {
    items : CartItemModel[]
}
export interface CartItemModel {
    _id: string;
    productShortDesc: string;
    productPrice: string;
    qty: number;
    productImg: string;
}