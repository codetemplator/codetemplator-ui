import {Injectable} from '@angular/core';
import {User} from '../../user/user.state';

@Injectable()
export class LoginActions {

  static SHOW_MODAL = 'login/SHOW_MODAL';
  static HIDE_MODAL = 'login/HIDE_MODAL';

  static UPDATE_USERNAME = 'login/UPDATE_USERNAME';
  static UPDATE_PASSWORD = 'login/UPDATE_PASSWORD';

  static LOGIN = 'login/LOGIN';
  static LOGIN_OK = 'login/LOGIN_OK';
  static LOGIN_FAIL = 'login/LOGIN_FAIL';

  showModal = () => ({type: LoginActions.SHOW_MODAL});

  hideModal = () => ({type: LoginActions.HIDE_MODAL});

  updateUsername = (username: string) => ({type: LoginActions.UPDATE_USERNAME, username});

  updatePassword = (password: string) => ({type: LoginActions.UPDATE_PASSWORD, password});

  login = () => ({type: LoginActions.LOGIN});

  loginOk = (user: User) => ({type: LoginActions.LOGIN_OK, payload: user});

  loginFail = () => ({type: LoginActions.LOGIN_FAIL});
}
