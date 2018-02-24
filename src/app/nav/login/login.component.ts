import {Component} from '@angular/core';
import {LoginActions} from './login.actions';
import {AppState} from '../../root.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private store: Store<AppState>, private actions: LoginActions) {
  }

  showModal() {
    this.store.dispatch(this.actions.showModal());
  }
}
