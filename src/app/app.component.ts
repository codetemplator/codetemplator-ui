import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {ApplicationsActions} from './applications/applications.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private actions: ApplicationsActions) {
  }

  @dispatch()
  hideSideNav() {
    return this.actions.hideSideNav();
  }
}
