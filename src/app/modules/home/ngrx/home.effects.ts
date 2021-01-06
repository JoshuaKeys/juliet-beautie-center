import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { forkJoin } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { HomeService } from "../services/home.service";
import { assembleProductsRequest, assembleProductsSuccess } from "./home.actions";

@Injectable()
export class HomeEffects {
    assembleProductsRequest$ = createEffect(()=> this.actions$.pipe(
        ofType(assembleProductsRequest),
        mergeMap(action =>  forkJoin({
            bestSelling: this.homeService.getBestSellingProducts(),
            featured: this.homeService.getFeatureProducts()
        }).pipe(
            map(({bestSelling, featured}) => assembleProductsSuccess({bestSelling, featured}))
        ))
        
    )) 
    constructor(private actions$: Actions, private homeService: HomeService) {}
}