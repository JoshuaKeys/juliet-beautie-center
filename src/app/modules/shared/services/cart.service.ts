import { Injectable } from '@angular/core';
import { CartItemModel, CartModel } from '../models/cart.model';
import { ProductItemModel } from '../models/product-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }
  assembleItem(product: ProductItemModel, qty: number): CartItemModel {
    return {
      _id: product._id,
      productShortDesc: product.productShortDesc,
      productPrice: product.productPrice,
      qty: qty,
      productImg: product.productImgs[0]
    };
  }
  appendProductItem(productItem: CartItemModel, storageObj: CartModel): CartModel {
    if (storageObj) {
      const productIdx = storageObj.items.findIndex(product => product._id === productItem._id);
      if (productIdx > -1) {
        storageObj.items[productIdx].qty++;
        return storageObj;
      }
      storageObj.items.push(productItem);
      return storageObj;
    }

    return {
      items: [productItem]
    } as CartModel;
  }
  removeItem(product: CartItemModel) {
    const cartItems = this.getItems();
    console.log(cartItems, product)
    const itemIdx = cartItems.items.findIndex(item => item._id === product._id);
    cartItems.items.splice(itemIdx, 1);
    localStorage.setItem('julietsBeautyCart', JSON.stringify(cartItems))
    return cartItems;
  }
  addItem(product: ProductItemModel, qty: number) {
    const productItem: CartItemModel = this.assembleItem(product, qty);

    const julietsBeautyCart = localStorage.getItem('julietsBeautyCart');
    let julietsBeautyCartObj: CartModel = JSON.parse(julietsBeautyCart);

    const modifiedCart = this.appendProductItem(productItem, julietsBeautyCartObj)

    localStorage.setItem('julietsBeautyCart', JSON.stringify(modifiedCart))
  }
  updateQty(item: CartItemModel, qty: number) {
    const cartItems: CartModel = this.getItems();
    const idx = cartItems.items.findIndex(cartItem => cartItem._id === item._id);
    cartItems.items[idx].qty = qty;
    localStorage.setItem('julietsBeautyCart', JSON.stringify(cartItems));
  }
  getItems(): CartModel {
    return JSON.parse(localStorage.getItem('julietsBeautyCart')) as CartModel;
  }
  getTotal(): number {
    const cartItems = this.getItems();
    let total = 0;
    if (!cartItems) {
      return 0;
    }
    cartItems.items.forEach(item => {
      total += +item.productPrice * item.qty;
    });
    console.log(total);
    return total;
  }
}
