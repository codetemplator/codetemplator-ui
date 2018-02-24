import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SignupState} from '../signup.state';
import {SignupActions} from '../signup.actions';
import {AppState} from '../../../root.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {

  signup$: Observable<SignupState>;

  constructor(private store: Store<AppState>, private actions: SignupActions) {
    this.signup$ = this.store.select('signup');
  }

  hide() {
    this.store.dispatch(this.actions.hideModal());
  }

  updateUsername(username: string) {
    this.store.dispatch(this.actions.updateUsername(username));
  }

  updateEmail(email: string) {
    this.store.dispatch(this.actions.updateEmail(email));
  }

  updatePassword(password: string) {
    this.store.dispatch(this.actions.updatePassword(password));
  }

  signup() {
    this.store.dispatch(this.actions.signup());
  }
}
