import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.scss']
})
export class ProductRecommendationsComponent implements OnInit {
  product = {
    productId: 'p1',
    firstImg: 'assets/images/raspberry-image-1.jpg',
    secondImg: 'assets/images/raspberry-image-2.jpg',
    firstDescImg: 'assets/images/raspberry-description-img-1.jpg',
    category: 'facial toner',
    igLink: '',
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
