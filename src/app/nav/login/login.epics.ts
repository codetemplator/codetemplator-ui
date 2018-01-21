import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Epic} from 'redux-observable';
import {of} from 'rxjs/observable/of';
import {LoginActions} from './login.actions';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {UserService} from '../../user/user.service';
import {concat} from 'rxjs/observable/concat';
import {User} from '../../user/user.state';

@Injectable()
export class LoginEpics {

  epics: Epic<any, any>[];

  constructor(public dialog: MatDialog, public loginActions: LoginActions, public userService: UserService) {
    this.epics = [this.showLoginModal, this.hideLoginModal, this.login];
  }

  showLoginModal = action$ => {
    return action$.ofType(LoginActions.SHOW_MODAL)
      .map(() => {
        this.dialog.open(LoginModalComponent, {
          width: '600px'
        }).afterClosed();

        return {type: 'UNKNOWN'};
      });
  };

  hideLoginModal = action$ => {
    return action$.ofType(LoginActions.HIDE_MODAL)
      .map(() => {
        this.dialog.closeAll();

        return {type: 'UNKNOWN'};
      });
  };

  login = (action$, store) => {
    return action$.ofType(LoginActions.LOGIN)
      .mergeMap(() => {
        const {loginForm} = store.getState().login;

        return this.userService.login(loginForm)
          .mergeMap((user: User) => concat(
            of(this.loginActions.loginOk(user)),
            of(this.loginActions.hideModal())
          ))
          .catch(() => of(this.loginActions.loginFail()));
      });
  };

}
