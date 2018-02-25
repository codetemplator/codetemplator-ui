import {Injectable} from '@angular/core';
import {User} from './user.state';

@Injectable()
export class UserActions {

  static SET_USER = 'user/SET_USER';

  setUser = (user: User) => ({type: UserActions.SET_USER, payload: user});
}
