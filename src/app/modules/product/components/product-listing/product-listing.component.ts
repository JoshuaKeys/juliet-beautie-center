import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { ProductItemsComponent } from 'src/app/modules/shared/components/product-items/product-items.component';
import { ProductItemModel } from 'src/app/modules/shared/models/product-item.model';
import { fetchProductsRequest } from '../../ngrx/actions';
import { selectProducts } from '../../ngrx/selectors';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  isOpened = false;

  products: ProductItemModel[]
  private privItem = null;
  @ViewChild(ProductItemsComponent) productItems: ProductItemsComponent;
  constructor(private store: Store<any>, private activatedRoute: ActivatedRoute) { }
  toggleMenu() {
    this.isOpened = !this.isOpened;
  }
  ngOnInit(): void {
    this.store.dispatch(fetchProductsRequest())
    this.store.select(selectProducts).subscribe(
      products => {
        const param = this.activatedRoute.snapshot.params['category'];
        if(param === 'all') {
          this.products = products;
        }else {
          this.products = products.filter(value => {
            return value.productCategory.toLowerCase() === param.split('-').join(' ');
          });
        }
      }
    )
     this.activatedRoute.params.pipe(
      withLatestFrom(this.store.select(selectProducts)),

      map(([params, products]) => {
        if(params['category'] === 'all') {
          console.log(params, products)
          this.products = products
          return;
        }
         this.products = products.filter(value => {
          return value.productCategory.toLowerCase() === params['category'].split('-').join(' ');
        });
      })
     ).subscribe();

    // this.products = this.activatedRoute.params.pipe(
    //   tap(item => console.log(item)),
    //   mergeMap((params) => this.store.select(selectProducts).pipe(
    //     map(products => {
    //       return products.filter(value => {
    //         return value.productCategory.toLowerCase() === params['category'].split('-').join(' ');
    //       })
    //     })
    //   )
    //   )

    // )
  }
  doSomething() {

  }
}
