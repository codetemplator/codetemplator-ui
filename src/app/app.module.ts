import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {routes} from './routes';
import {HttpClientModule} from '@angular/common/http';
import {LandingModule} from './landing/landing.module';
import {CoreModule} from './core/core.module';
import {NavModule} from './nav/nav.module';
import {MatSidenavModule} from '@angular/material';
import {ApplicationsModule} from './applications/applications.module';
import {LoggedInGuard} from './router/logged-in.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({appId: 'redux-mesh-ui'}),
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    NgReduxModule,
    CoreModule,
    MatSidenavModule,
    NavModule,
    LandingModule,
    ApplicationsModule
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
