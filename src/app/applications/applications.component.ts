import {Component, OnInit} from '@angular/core';
import {ApplicationsState} from './applications.state';
import {Observable} from 'rxjs/Observable';
import {dispatch, select} from '@angular-redux/store';
import {ApplicationsActions} from './applications.actions';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  @select('applications') applications$: Observable<ApplicationsState>;

  constructor(private actions: ApplicationsActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.actions.fetchApps();
  }

}
