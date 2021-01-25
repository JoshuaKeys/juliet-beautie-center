import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MobileSideNavComponent } from './components/mobile-side-nav/mobile-side-nav.component';
import { MenuDropDownComponent } from './components/menu-drop-down/menu-drop-down.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { ProductItemModalComponent } from './components/product-item-modal/product-item-modal.component';
import { QtySelectorComponent } from './components/qty-selector/qty-selector.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { SearchSelectComponent } from './components/search-select/search-select.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent
  }, {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]


@NgModule({
  declarations: [
    TopHeaderComponent,
    MainHeaderComponent,
    MobileSideNavComponent,
    MenuDropDownComponent,
    ProductItemComponent,
    FooterComponent,
    ProductItemsComponent,
    ProductItemModalComponent,
    QtySelectorComponent,
    SideNavComponent,
    SearchComponent,
    AboutUsComponent,
    ContactComponent,
    PolicyComponent,
    ShippingComponent,
    SearchSelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TopHeaderComponent,
    MainHeaderComponent,
    MobileSideNavComponent,
    MenuDropDownComponent,
    ProductItemComponent,
    FooterComponent,
    ProductItemsComponent,
    QtySelectorComponent,
    SideNavComponent,
    SearchComponent,
    SearchSelectComponent
  ]
})
export class SharedModule { }
