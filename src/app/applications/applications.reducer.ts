import {ApplicationsState, applicationState} from './applications.state';
import {ApplicationsActions} from './applications.actions';

export const applicationsReducer = (state: ApplicationsState = applicationState, action): ApplicationsState => {
  switch (action.type) {
    case ApplicationsActions.FETCH_APPS:
      return {...state, isFetchingApps: true};
    case ApplicationsActions.FETCH_APPS_OK:
      return {...state, isFetchingApps: false, apps: action.apps};
    case ApplicationsActions.FETCH_APPS_FAIL:
      return {...state, isFetchingApps: false};
    case ApplicationsActions.SHOW_SIDE_NAV:
      return {...state, showSideNav: true};
    case ApplicationsActions.HIDE_SIDE_NAV:
      return {...state, showSideNav: false};
    default:
      return state;
  }
};
