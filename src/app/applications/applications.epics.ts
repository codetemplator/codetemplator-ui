import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {of} from 'rxjs/observable/of';
import {ApplicationsService} from './applications.service';
import {ApplicationsActions} from './applications.actions';
import {User} from '../user/user.state';
import {MatDialog} from '@angular/material';
import {AddApplicationModalComponent} from './add-application-modal/add-application-modal.component';
import {AddForm} from './applications.state';
import {concat} from 'rxjs/observable/concat';

@Injectable()
export class ApplicationsEpics {

  epics: Epic<any, any>[];

  constructor(public dialog: MatDialog, private applicationsService: ApplicationsService, private applicationsActions: ApplicationsActions) {
    this.epics = [this.fetchApplications, this.showAddApplicationModal, this.hideAddApplicationModal, this.addApp];
  }

  fetchApplications = (action$, store) => {
    return action$.ofType(ApplicationsActions.FETCH_APPS)
      .mergeMap(() => {
        const {user}: { user: User } = store.getState().user;

        return this.applicationsService.getApps(user)
          .map(this.applicationsActions.fetchAppsOk)
          .catch(() => of(this.applicationsActions.fetchAppsFail()));
      });
  };

  showAddApplicationModal = action$ => {
    return action$.ofType(ApplicationsActions.SHOW_ADD_APPLICATION_MODAL)
      .map(() => {
        this.dialog.open(AddApplicationModalComponent, {
          width: '600px',
          height: '250px'

        }).afterClosed();

        return {type: 'UNKNOWN'};
      });
  };

  hideAddApplicationModal = action$ => {
    return action$.ofType(ApplicationsActions.HIDE_ADD_APPLICATION_MODAL)
      .map(() => {
        this.dialog.closeAll();

        return {type: 'UNKNOWN'};
      });
  };

  addApp = (action$, store) => {
    return action$.ofType(ApplicationsActions.ADD)
      .mergeMap(() => {
        const {user}: { user: User } = store.getState().user;
        const {addForm}: { addForm: AddForm } = store.getState().applications;

        return this.applicationsService.addApp(user, addForm)
          .mergeMap((application) => concat(
            of(this.applicationsActions.addOk(application)),
            of(this.applicationsActions.hideAddApplicationModal())
          ))
          .catch(() => of(this.applicationsActions.addFail()));
      });
  };
}
