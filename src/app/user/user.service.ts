import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {User} from './user.state';
import {SignupForm, SignupUser} from '../nav/signup/signup.state';
import {LoginForm} from '../nav/login/login.state';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(loginForm: LoginForm): Observable<User> {
    return this.http.post<User>(`${environment.api}/users/login`, loginForm);
  }

  signup(signupForm: SignupForm): Observable<SignupUser> {
    return this.http.post<SignupUser>(`${environment.api}/users`, signupForm);
  }
}
