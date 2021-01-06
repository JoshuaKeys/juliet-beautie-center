import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ProductItemModel } from 'src/app/modules/shared/models/product-item.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  itemActive = 1;
  @ViewChild('first') firstImg: ElementRef<HTMLImageElement>;
  @ViewChild('second') secondImg: ElementRef<HTMLImageElement>;

  @Input() product: ProductItemModel;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  show(idx) {
    if(idx === 1) {
      this.itemActive = 1;
      this.renderer.removeClass(this.secondImg.nativeElement, 'product-carousel--active');
      this.renderer.addClass(this.secondImg.nativeElement, 'product-carousel--inactive');
      this.renderer.removeClass(this.firstImg.nativeElement, 'product-carousel--inactive')
      this.renderer.addClass(this.firstImg.nativeElement, 'product-carousel--active');
    } else {
      this.itemActive = 2;
      this.renderer.removeClass(this.firstImg.nativeElement, 'product-carousel--active');
      this.renderer.addClass(this.firstImg.nativeElement, 'product-carousel--inactive');
      this.renderer.removeClass(this.secondImg.nativeElement, 'product-carousel--inactive')
      this.renderer.addClass(this.secondImg.nativeElement, 'product-carousel--active');
    }
  }
}
