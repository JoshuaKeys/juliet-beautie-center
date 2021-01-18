import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectFirstName } from '../ngrx/checkout.selectors';

@Injectable({
  providedIn: 'root'
})
export class LocationQuestionGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this.store.select(selectFirstName).pipe(
      map(data => data && data.firstName ? true : this.router.createUrlTree(['/checkout']))
    )
  }
  constructor(private store: Store, private router: Router) { }
}
