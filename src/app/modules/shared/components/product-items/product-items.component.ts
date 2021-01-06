import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  @Input() itemWidth: string;
  products = [
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    },
    {
      productId: 'p1',
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
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
