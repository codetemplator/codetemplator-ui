import {loginState, LoginState} from './login.state';
import {LoginActions} from './login.actions';

export function loginReducer(state: LoginState = loginState, action): LoginState {
  switch (action.type) {
    case LoginActions.SHOW_MODAL:
      return {...state, showLoginModal: true};
    case LoginActions.HIDE_MODAL:
      return {...state, showLoginModal: false};
    case LoginActions.UPDATE_USERNAME:
      return {...state, loginForm: {...state.loginForm, username: action.username}};
    case LoginActions.UPDATE_PASSWORD:
      return {...state, loginForm: {...state.loginForm, password: action.password}};
    case LoginActions.LOGIN:
      return {...state, isLoggingIn: true};
    case LoginActions.LOGIN_OK:
      return {...state, isLoggingIn: false};
    case LoginActions.LOGIN_FAIL:
      return {...state, isLoggingIn: false};
    default:
      return state;
  }
}
