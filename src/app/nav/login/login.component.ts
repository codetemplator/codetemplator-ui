import {Component} from '@angular/core';
import {LoginActions} from './login.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private actions: LoginActions) {
  }

  @dispatch()
  showModal() {
    return this.actions.showModal();
  }
}
