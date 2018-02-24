import {userState, UserState} from './user.state';
import {LoginActions} from '../nav/login/login.actions';

export function userReducer(state: UserState = userState, action): UserState {
  switch (action.type) {
    case LoginActions.LOGIN_OK:
      return {...state, user: action.payload, isLoggedIn: true};
    default:
      return state;
  }
};
