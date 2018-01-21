import {combineReducers} from 'redux';
import {loginReducer as login} from './nav/login/login.reducer';
import {userReducer as user} from './user/user.reducer';

export const rootReducer = combineReducers({
  login,
  user
});
