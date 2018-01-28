import {Injectable} from '@angular/core';
import {Application} from './applications.state';

@Injectable()
export class ApplicationsActions {

  static FETCH_APPS = 'applications/FETCH_APPS';
  static FETCH_APPS_OK = 'applications/FETCH_APPS_OK';
  static FETCH_APPS_FAIL = 'applications/FETCH_APPS_FAIL';

  static SHOW_SIDE_NAV = 'applications/SHOW_SIDE_NAV';
  static HIDE_SIDE_NAV = 'applications/HIDE_SIDE_NAV';

  static SHOW_ADD_APPLICATION_MODAL = 'applications/SHOW_ADD_APPLICATION_MODAL';
  static HIDE_ADD_APPLICATION_MODAL = 'applications/HIDE_ADD_APPLICATION_MODAL';

  static UPDATE_APP_NAME = 'applications/UPDATE_APP_NAME';

  static ADD = 'applications/ADD';
  static ADD_OK = 'applications/ADD_OK';
  static ADD_FAIL = 'applications/ADD_FAIL';

  fetchApps = () => ({type: ApplicationsActions.FETCH_APPS});

  fetchAppsOk = (apps: Application[]) => ({type: ApplicationsActions.FETCH_APPS_OK, apps});

  fetchAppsFail = () => ({type: ApplicationsActions.FETCH_APPS_FAIL});

  showSideNav = () => ({type: ApplicationsActions.SHOW_SIDE_NAV});

  hideSideNav = () => ({type: ApplicationsActions.HIDE_SIDE_NAV});

  showAddApplicationModal = () => ({type: ApplicationsActions.SHOW_ADD_APPLICATION_MODAL});

  hideAddApplicationModal = () => ({type: ApplicationsActions.HIDE_ADD_APPLICATION_MODAL});

  updateAppName = (name: string) => ({type: ApplicationsActions.UPDATE_APP_NAME, name});

  add = () => ({type: ApplicationsActions.ADD});

  addOk = (application: Application) => ({type: ApplicationsActions.ADD_OK, application});

  addFail = () => ({type: ApplicationsActions.ADD_FAIL});
}
