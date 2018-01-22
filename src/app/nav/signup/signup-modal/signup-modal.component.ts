import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {dispatch, select} from '@angular-redux/store';
import {SignupState} from '../signup.state';
import {SignupActions} from '../signup.actions';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {

  @select('signup') signup$: Observable<SignupState>;

  constructor(private actions: SignupActions) {
  }

  @dispatch()
  hide() {
    return this.actions.hideModal();
  }

  @dispatch()
  updateUsername(username: string) {
    return this.actions.updateUsername(username);
  }

  @dispatch()
  updateEmail(email: string) {
    return this.actions.updateEmail(email);
  }

  @dispatch()
  updatePassword(password: string) {
    return this.actions.updatePassword(password);
  }

  @dispatch()
  signup() {
    return this.actions.signup();
  }
}
