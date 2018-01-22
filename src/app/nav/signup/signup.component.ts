import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {SignupActions} from './signup.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private actions: SignupActions) {
  }

  @dispatch()
  showModal() {
    return this.actions.showModal();
  }
}
