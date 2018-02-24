import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginActions} from './login.actions';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {UserService} from '../../user/user.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, select, Store} from '@ngrx/store';
import {map, withLatestFrom, mergeMap} from 'rxjs/operators';
import {AppState} from '../../root.reducer';
import {User} from '../../user/user.state';
import {of} from 'rxjs/observable/of';

@Injectable()
export class LoginEffects {

  @Effect() showLoginModal$: Observable<Action> = this.actions$.pipe(
    ofType(LoginActions.SHOW_MODAL),
    map(() => {
      this.dialog.open(LoginModalComponent, {
        width: '600px'
      }).afterClosed();

      return {type: 'UNKNOWN'};
    }));

  @Effect() hideLoginModal$: Observable<Action> = this.actions$.pipe(
    ofType(LoginActions.HIDE_MODAL),
    map(() => {
      this.dialog.closeAll();

      return {type: 'UNKNOWN'};
    }));

  @Effect() login = this.actions$.pipe(
    ofType(LoginActions.LOGIN),
    withLatestFrom(this.store$),
    select(([action, storeState]) => {
      return storeState.login.loginForm;
    }),
    mergeMap((loginForm) =>
      this.userService.login(loginForm)
        .mergeMap((user: User) => [
          this.loginActions.loginOk(user),
          this.loginActions.hideModal()
        ])
        .catch(() => of(this.loginActions.loginFail()))
    ));

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private dialog: MatDialog,
              private loginActions: LoginActions,
              private userService: UserService) {
  }
}
