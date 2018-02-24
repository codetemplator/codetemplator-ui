import {Component} from '@angular/core';
import {LoginActions} from '../login.actions';
import {Observable} from 'rxjs/Observable';
import {LoginState} from '../login.state';
import {Store} from '@ngrx/store';
import {AppState} from '../../../root.reducer';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  login$: Observable<LoginState>;

  constructor(private store: Store<AppState>, private actions: LoginActions) {
    this.login$ = this.store.select('login');
  }

  hide() {
    this.store.dispatch(this.actions.hideModal());
  }

  updateUsername(username) {
    this.store.dispatch(this.actions.updateUsername(username));
  }

  updatePassword(password) {
    this.store.dispatch(this.actions.updatePassword(password));
  }

  login() {
    this.store.dispatch(this.actions.login());
  }

}
