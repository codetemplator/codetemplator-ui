import {Injectable} from '@angular/core';
import {SignupUser} from './signup.state';

@Injectable()
export class SignupActions {

  static SHOW_MODAL = 'signup/SHOW_MODAL';
  static HIDE_MODAL = 'signup/HIDE_MODAL';

  static UPDATE_USERNAME = 'signup/UPDATE_USERNAME';
  static UPDATE_EMAIL = 'signup/UPDATE_EMAIL';
  static UPDATE_PASSWORD = 'signup/UPDATE_PASSWORD';

  static SIGNUP = 'signup/SIGNUP';
  static SIGNUP_OK = 'signup/SIGNUP_OK';
  static SIGNUP_FAIL = 'signup/SIGNUP_FAIL';

  showModal = () => ({type: SignupActions.SHOW_MODAL});

  hideModal = () => ({type: SignupActions.HIDE_MODAL});

  updateUsername = (username: string) => ({type: SignupActions.UPDATE_USERNAME, payload: username});

  updateEmail = (email: string) => ({type: SignupActions.UPDATE_EMAIL, payload: email});

  updatePassword = (password: string) => ({type: SignupActions.UPDATE_PASSWORD, payload: password});

  signup = () => ({type: SignupActions.SIGNUP});

  signupOk = (user: SignupUser) => ({type: SignupActions.SIGNUP_OK, user});

  signupFail = () => ({type: SignupActions.SIGNUP_FAIL});

}
