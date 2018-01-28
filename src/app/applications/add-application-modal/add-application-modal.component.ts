import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {ApplicationsActions} from '../applications.actions';
import {Observable} from 'rxjs/Observable';
import {ApplicationsState} from '../applications.state';

@Component({
  selector: 'app-add-application-modal',
  templateUrl: './add-application-modal.component.html',
  styleUrls: ['./add-application-modal.component.css']
})
export class AddApplicationModalComponent {

  @select('applications') applications$: Observable<ApplicationsState>;

  constructor(private actions: ApplicationsActions) {
  }

  @dispatch()
  updateName(name: string) {
    return this.actions.updateAppName(name);
  }

  @dispatch()
  hide() {
    return this.actions.hideAddApplicationModal();
  }

  @dispatch()
  add() {
    return this.actions.add();
  }

}
