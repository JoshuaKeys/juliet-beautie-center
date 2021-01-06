import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-modal',
  templateUrl: './product-item-modal.component.html',
  styleUrls: ['./product-item-modal.component.scss']
})
export class ProductItemModalComponent implements OnInit {
  @Input() shown: boolean;
  product = {
    firstImg: 'assets/images/raspberry-image-1.jpg',
    secondImg: 'assets/images/raspberry-image-2.jpg',
    category: 'facial toner',
    price: 4.99,
    title: 'raspberry refreshing face toner spray',
    description: 'Raspberry refreshing face toner spray, It Rejuvenates',
    points: [
      'imporve complexion',
      'prevents the appearance of wrinkles',
      'brightens the skin',
      'eliminates acne',
      'moisturizes and tones the skin'
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
