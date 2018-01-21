import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {User} from './user.state';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  login({username, password}: { username: string, password: string }): Observable<User> {
    return this.http.post<User>(`${environment.api}/users/login`, {username, password});
  }
}
