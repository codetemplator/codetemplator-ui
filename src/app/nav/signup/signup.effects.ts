import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {of} from 'rxjs/observable/of';
import {UserService} from '../../user/user.service';
import {concat} from 'rxjs/observable/concat';
import {SignupActions} from './signup.actions';
import {SignupUser} from './signup.state';
import {SignupModalComponent} from './signup-modal/signup-modal.component';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {map, withLatestFrom, mergeMap} from 'rxjs/operators';
import {AppState} from '../../root.reducer';

@Injectable()
export class SignupEffects {

  @Effect() showSignupnModal$: Observable<Action> = this.actions$.pipe(
    ofType(SignupActions.SHOW_MODAL),
    map(() => {
      this.dialog.open(SignupModalComponent, {
        width: '600px'
      }).afterClosed();

      return {type: 'UNKNOWN'};
    }));

  @Effect() hideSignupModal$: Observable<Action> = this.actions$.pipe(
    ofType(SignupActions.HIDE_MODAL),
    map(() => {
      this.dialog.closeAll();

      return {type: 'UNKNOWN'};
    }));

  @Effect() signup = this.actions$.pipe(
    ofType(SignupActions.SIGNUP),
    withLatestFrom(this.store$),
    select(([action, storeState]) => {
      return storeState.signup.signupForm;
    }),
    mergeMap((signupForm) =>
      this.userService.signup(signupForm)
        .mergeMap((user: SignupUser) => concat(
          of(this.signupActions.signupOk(user)),
          of(this.signupActions.hideModal())
        ))
        .catch(() => of(this.signupActions.signupFail()))
    ));

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              public dialog: MatDialog,
              public signupActions: SignupActions,
              public userService: UserService) {
  }

}
