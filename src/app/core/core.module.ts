import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {NgRedux} from '@angular-redux/store';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {environment} from '../../environments/environment';
import {rootReducer} from '../root.reducer';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class CoreModule {

  constructor(private ngRedux: NgRedux<any>) {

    const epics = combineEpics(
    );

    const middleware = [
      createEpicMiddleware(epics)
    ];

    if (!environment.production) {
      middleware.push(reduxImmutableStateInvariant.default());
    }

    const enhancers = [];

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
  }
}
