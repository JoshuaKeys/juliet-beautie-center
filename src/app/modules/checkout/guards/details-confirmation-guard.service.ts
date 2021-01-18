import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectDeliveryCharge } from '../ngrx/checkout.selectors';

@Injectable({
  providedIn: 'root'
})
export class DetailsConfirmationGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this.store.select(selectDeliveryCharge).pipe(
      map(charge => charge ? true : this.router.createUrlTree(['/checkout']))
    )
  }
  constructor(private store: Store, private router: Router) { }
}
