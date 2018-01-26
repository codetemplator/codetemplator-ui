import {Injectable} from '@angular/core';
import {Application} from './applications.state';

@Injectable()
export class ApplicationsActions {

  static FETCH_APPS = 'applications/FETCH_APPS';
  static FETCH_APPS_OK = 'applications/FETCH_APPS_OK';
  static FETCH_APPS_FAIL = 'applications/FETCH_APPS_FAIL';

  fetchApps = () => ({type: ApplicationsActions.FETCH_APPS});

  fetchAppsOk = (apps: Application[]) => ({type: ApplicationsActions.FETCH_APPS_OK, apps});

  fetchAppsFail = () => ({type: ApplicationsActions.FETCH_APPS_FAIL});
}
