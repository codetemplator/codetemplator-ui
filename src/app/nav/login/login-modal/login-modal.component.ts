import {Component} from '@angular/core';
import {LoginActions} from '../login.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {LoginState} from '../login.state';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  @select('login') login$: Observable<LoginState>;

  constructor(private actions: LoginActions) {
  }

  @dispatch()
  hide() {
    return this.actions.hideModal();
  }

  @dispatch()
  updateUsername(username) {
    return this.actions.updateUsername(username);
  }

  @dispatch()
  updatePassword(password) {
    return this.actions.updatePassword(password);
  }

  @dispatch()
  login() {
    return this.actions.login();
  }

}
