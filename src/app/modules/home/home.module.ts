import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { WhatWeDoItemComponent } from './components/what-we-do-item/what-we-do-item.component';
import { BestSellingComponent } from './components/best-selling/best-selling.component';
import { InfiniteCarouselComponent } from './components/infinite-carousel/infinite-carousel.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './ngrx/home.reducer';
import { HomeService } from './services/home.service';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './ngrx/home.effects';



@NgModule({
  declarations: [HomeComponent, CarouselComponent, WhatWeDoComponent, WhatWeDoItemComponent, BestSellingComponent, InfiniteCarouselComponent, CarouselItemDirective],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ],
  providers: [
    HomeService
  ],
  exports: [
    BestSellingComponent
  ]
})
export class HomeModule { }
