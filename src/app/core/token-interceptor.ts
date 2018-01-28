import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserState} from '../user/user.state';
import {select} from '@angular-redux/store';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  @select('user') user$: Observable<UserState>;

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.user$.mergeMap(user => {
      request = request.clone({
        setHeaders: {
          Authorization: user.user ? user.user.id : ''
        }
      });

      console.log(user);
      return next.handle(request)
    });
  }
}
