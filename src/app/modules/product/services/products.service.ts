import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ProductItemModel } from "../../shared/models/product-item.model";
import { pluck } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    fetchProducts(): Observable<ProductItemModel[]> {
        return this.httpClient.get<ProductItemModel[]>('/api/products').pipe(
            pluck('products')
        );
    }
    fetchProduct(productId: string): Observable<ProductItemModel> {
        return this.httpClient.get<ProductItemModel>('/api/product', {
            params: new HttpParams().set('productId', productId)
        }).pipe(
            pluck('product')
        )
    }

    constructor(private httpClient: HttpClient) {}
}