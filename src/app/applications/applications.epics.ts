import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {of} from 'rxjs/observable/of';
import {ApplicationsService} from './applications.service';
import {ApplicationsActions} from './applications.actions';
import {User} from '../user/user.state';

@Injectable()
export class ApplicationsEpics {

  epics: Epic<any, any>[];

  constructor(private applicationsService: ApplicationsService, private applicationsActions: ApplicationsActions) {
    this.epics = [this.fetchApplications];
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


}
