import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTotalItems } from 'src/app/modules/cart/ngrx/cart.selectors';
import { DropDownModel } from '../../models/drop-down.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  total: Observable<number>;
  isOpened = false;
  ourStorDropdown: DropDownModel[] = [
    {
      itemLink: '/shop/hair-care',
      itemName: 'Hair Care'
    },
    {
      itemLink: '/shop/body-oil',
      itemName: 'Body Oil'
    },
    {
      itemLink: '/shop/facial-scrub',
      itemName: 'Facial Scrub'
    }
  ]
  toggleMenu() {
    this.isOpened = !this.isOpened;
  }
  constructor(private cartService: CartService, private store: Store) { }

  ngOnInit(): void {
    // this.total = this.cartService.getTotal();
    this.total = this.store.select(selectTotalItems);
  }

}
