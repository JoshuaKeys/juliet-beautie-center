import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { SharedModule } from '../shared/shared.module';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductUtilitiesComponent } from './components/product-utilities/product-utilities.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { ProductRecommendationsComponent } from './components/product-recommendations/product-recommendations.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './ngrx/effects';


const productRoutes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    children: [
      {
        path: ':category',
        component: ProductListingComponent
      },
      {
        path: 'product',
        component: ProductDescriptionComponent
      }, {
        path: 'product/:id',
        component: ProductDescriptionComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ProductListingComponent, ProductCategoriesComponent, ProductUtilitiesComponent, ProductDescriptionComponent, ProductHomeComponent, SideFilterComponent, ProductRecommendationsComponent, ProductCarouselComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [RouterModule]
})
export class ProductListingModule { }
