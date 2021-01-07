import { AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { productFadeAnimation } from '../../animations/product-hover-animation';
import { ProductItemModel } from '../../models/product-item.model'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  animations: [productFadeAnimation]
})
export class ProductItemComponent implements OnInit, AfterViewInit, OnChanges, DoCheck {
  shown = false;
  @Input() product: ProductItemModel;
  firstItemState = 'active';
  secondItemState = 'inactive';
  hoveredState = 'normal';
  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    console.log(this.product);
  }
  ngAfterViewInit() {

  }
  ngOnChanges(changes: SimpleChanges) {

  }
  goToPdp() {
    this.router.navigate(['shop', 'product', this.product._id], {
      queryParams: {
        category: this.product.productCategory
      }
    })
  }
  ngDoCheck() {
    // console.log('Calling Do Check now')
  }
  show(event: MouseEvent) {
    event.stopPropagation();
    this.shown = true;
  }
  switchImages() {
    this.firstItemState = 'inactive';
    this.secondItemState = 'active';
    this.hoveredState = 'hovered'
  }
  resetSwitch(event: MouseEvent) {
    this.firstItemState = 'active';
    this.secondItemState = 'inactive';
    this.hoveredState = 'normal';
  }
  stop(event: MouseEvent) {
    console.log('stopping')
    event.stopPropagation();
  }
}
