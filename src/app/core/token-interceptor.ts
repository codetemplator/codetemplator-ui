import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserState} from '../user/user.state';
import {Store} from '@ngrx/store';
import {AppState} from '../root.reducer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  user$: Observable<UserState>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select('user');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.user$.mergeMap(user => {
      request = request.clone({
        setHeaders: {
          Authorization: user.user ? user.user.id : ''
        }
      });

      return next.handle(request)
    });
  }
}
