import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ActionReducer, State, StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {storeLogger} from 'ngrx-store-logger';
import {routes} from './routes';
import {HttpClientModule} from '@angular/common/http';
import {LandingModule} from './landing/landing.module';
import {CoreModule} from './core/core.module';
import {NavModule} from './nav/nav.module';
import {MatSidenavModule} from '@angular/material';
import {LoggedInGuard} from './router/logged-in.guard';
import {AppState, getRootReducer} from './root.reducer';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffects} from './nav/login/login.effects';
import {SignupEffects} from './nav/signup/signup.effects';
import {environment} from '../environments/environment';

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({appId: 'codetemplator-ui'}),
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    StoreModule.forRoot(getRootReducer(), {metaReducers}),
    EffectsModule.forRoot([SignupEffects, LoginEffects]),
    CoreModule,
    MatSidenavModule,
    NavModule,
    LandingModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [
    LoggedInGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
