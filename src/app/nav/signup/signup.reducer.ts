import {signupState, SignupState} from './signup.state';
import {SignupActions} from './signup.actions';

export const signupReducer = (state: SignupState = signupState, action): SignupState => {
  switch (action.type) {
    case SignupActions.SHOW_MODAL:
      return {...state, showModal: true};
    case SignupActions.HIDE_MODAL:
      return {...state, showModal: false};
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
