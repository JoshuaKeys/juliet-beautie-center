import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectDeliveryDetails, selectLocalDelivery } from '../ngrx/checkout.selectors';

@Injectable({
  providedIn: 'root'
})
export class LocalDeliveryGuardService {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this.store.select(selectLocalDelivery).pipe(
      map(data => {
        console.log(data);
        return data && data.isLocalDelivery ? true : this.router.createUrlTree(['/checkout', 'location-question']);
      })
    )
  }
  constructor(private store: Store, private router: Router) { }
}
