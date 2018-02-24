import {Component} from '@angular/core';
import {SignupActions} from './signup.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private store: Store<AppState>, private actions: SignupActions) {
  }

  showModal() {
    this.store.dispatch(this.actions.showModal());
  }
}
