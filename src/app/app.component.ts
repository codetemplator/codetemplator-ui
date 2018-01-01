import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {SideNavActions} from './side-nav/side-nav.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @select(['sideNav', 'showSideNav']) showSideNav$: Observable<boolean>;

  constructor(private actions: SideNavActions) {

  }

  @dispatch()
  closeSideNav() {
    return this.actions.hide();
  }
}
