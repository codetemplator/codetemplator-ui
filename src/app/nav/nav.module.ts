import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {NavActions} from './nav.actions';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {NavEpics} from './nav.epics';
import {FormsModule} from '@angular/forms';
import {UserModule} from '../user/user.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    UserModule
  ],
  declarations: [
    NavComponent,
    NavLoginComponent,
    LoginModalComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [
    NavActions,
    NavEpics
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class NavModule {
}
