import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';

@Injectable()
export class LoggedInGuard implements CanActivate {

  @select(['user', 'isLoggedIn']) isLoggedIn$: Observable<boolean>;
  @select(['login', 'isLoggingIn']) isLoggingIn$: Observable<boolean>;

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLoggingIn$
      .filter((isLoggingIn) => isLoggingIn === false)
      .take(1)
      .mergeMap(() => {
        return this.isLoggedIn$.mergeMap((isLoggedIn) => {
          if (!isLoggedIn) {
            this.router.navigate(['/']);
            return of(false);
          }

          return of(true);
        })
      });
  }
}
