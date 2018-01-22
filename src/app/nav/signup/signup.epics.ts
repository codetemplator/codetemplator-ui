import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Epic} from 'redux-observable';
import {of} from 'rxjs/observable/of';
import {UserService} from '../../user/user.service';
import {concat} from 'rxjs/observable/concat';
import {SignupActions} from './signup.actions';
import {SignupUser} from './signup.state';
import {SignupModalComponent} from './signup-modal/signup-modal.component';

@Injectable()
export class SignupEpics {

  epics: Epic<any, any>[];

  constructor(public dialog: MatDialog, public signupActions: SignupActions, public userService: UserService) {
    this.epics = [this.showLoginModal, this.hideLoginModal, this.signup];
  }

  showLoginModal = action$ => {
    return action$.ofType(SignupActions.SHOW_MODAL)
      .map(() => {
        this.dialog.open(SignupModalComponent, {
          width: '600px'
        }).afterClosed();

        return {type: 'UNKNOWN'};
      });
  };

  hideLoginModal = action$ => {
    return action$.ofType(SignupActions.HIDE_MODAL)
      .map(() => {
        this.dialog.closeAll();

        return {type: 'UNKNOWN'};
      });
  };

  signup = (action$, store) => {
    return action$.ofType(SignupActions.SIGNUP)
      .mergeMap(() => {
        const {signupForm} = store.getState().signup;

        return this.userService.signup(signupForm)
          .mergeMap((user: SignupUser) => concat(
            of(this.signupActions.signupOk(user)),
            of(this.signupActions.hideModal())
          ))
          .catch(() => of(this.signupActions.signupFail()));
      });
  };

}
