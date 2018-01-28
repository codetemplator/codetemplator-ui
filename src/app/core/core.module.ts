import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {NgRedux} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {environment} from '../../environments/environment';
import {rootReducer} from '../root.reducer';
import {LoginEpics} from '../nav/login/login.epics';
import * as persistState from 'redux-localstorage'
import {LoadingComponent} from './loading/loading.component';
import {SignupEpics} from '../nav/signup/signup.epics';
import {ApplicationsEpics} from '../applications/applications.epics';
import {TokenInterceptor} from './token-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    RouterModule,
    LoadingComponent
  ],
  providers: [
    LoginEpics,
    SignupEpics,
    ApplicationsEpics,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(private ngRedux: NgRedux<any>,
              private loginEpics: LoginEpics,
              private signupEpics: SignupEpics,
              private applicationsEpics: ApplicationsEpics) {

    const epics = combineEpics(
      ...this.loginEpics.epics,
      ...this.signupEpics.epics,
      ...this.applicationsEpics.epics
    );

    const middleware = [
      createEpicMiddleware(epics)
    ];

    if (!environment.production) {
      middleware.push(reduxImmutableStateInvariant.default());
      middleware.push(createLogger())
    }

    const enhancers = [];

    enhancers.push(persistState('user'));

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
  }
}
