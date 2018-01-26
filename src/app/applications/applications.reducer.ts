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
    default:
      return state;
  }
};
