import {userState, UserState} from './user.state';
import {UserActions} from './user.actions';

export function userReducer(state: UserState = userState, action): UserState {
  switch (action.type) {
    case UserActions.SET_USER:
      return {...state, user: action.payload, isLoggedIn: true};
    default:
      return state;
  }
}
