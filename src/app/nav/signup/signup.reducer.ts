import {signupState, SignupState} from './signup.state';
import {SignupActions} from './signup.actions';
import {Action} from '@ngrx/store';

export function signupReducer(state: SignupState = signupState, action): SignupState {
  switch (action.type) {
    case SignupActions.SHOW_MODAL:
      return {...state, showModal: true};
    case SignupActions.HIDE_MODAL:
      return {...state, showModal: false};
    case SignupActions.UPDATE_USERNAME:
      return {...state, signupForm: {...state.signupForm, username: action.payload}};
    case SignupActions.UPDATE_EMAIL:
      return {...state, signupForm: {...state.signupForm, email: action.payload}};
    case SignupActions.UPDATE_PASSWORD:
      return {...state, signupForm: {...state.signupForm, password: action.payload}};
    case SignupActions.SIGNUP:
      return {...state, isSigningUp: true};
    case SignupActions.SIGNUP_OK:
      return {...state, isSigningUp: false, signupForm: {username: '', email: '', password: ''}, signupUser: action.user};
    case SignupActions.SIGNUP_FAIL:
      return {...state, isSigningUp: false};
    default:
      return state;
  }
};
