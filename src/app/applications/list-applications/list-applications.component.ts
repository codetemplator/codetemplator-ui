import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApplicationsState} from '../applications.state';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-list-applications',
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.css']
})
export class ListApplicationsComponent implements OnInit {

  @select('applications') applications$: Observable<ApplicationsState>;

  constructor() {
  }

  ngOnInit() {
  }

}
