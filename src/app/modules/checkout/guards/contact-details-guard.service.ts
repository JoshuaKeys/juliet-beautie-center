import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectCartItems } from '../../cart/ngrx/cart.selectors';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailsGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this.store.select(selectCartItems).pipe(
      map(cartItems => {
        return cartItems && cartItems.length ? true : this.router.createUrlTree(['/cart'])
      })
    )
  }
  constructor(private store: Store, private router: Router) { }
}
