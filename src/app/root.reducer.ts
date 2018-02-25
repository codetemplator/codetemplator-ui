import {loginReducer as login} from './nav/login/login.reducer';
import {userReducer as user} from './user/user.reducer';
import {signupReducer as signup} from './nav/signup/signup.reducer';
import {UserState} from './user/user.state';
import {LoginState} from './nav/login/login.state';
import {SignupState} from './nav/signup/signup.state';

export interface AppState {
  user: UserState,
  login: LoginState,
  signup: SignupState
}

export function getRootReducer() {
  return {
    user,
    login,
    signup
  }
}
