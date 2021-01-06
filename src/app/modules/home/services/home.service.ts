import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { ProductItemModel } from "../../shared/models/product-item.model";

@Injectable()
export class HomeService {
    getFeatureProducts() : Observable<ProductItemModel[]> {
        return this.httpClient.get<ProductItemModel[]>('/api/featured-products').pipe(
            pluck('products')
        );
    }
    getBestSellingProducts(): Observable<ProductItemModel[]> {
        return this.httpClient.get<ProductItemModel[]>('/api/best-selling-products').pipe(
            pluck('products')
        );
    }
    constructor(private httpClient: HttpClient) {}
}