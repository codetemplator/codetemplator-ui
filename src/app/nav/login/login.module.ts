import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {UserModule} from '../../user/user.module';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {LoginEpics} from './login.epics';
import {LoginActions} from './login.actions';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {CoreModule} from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UserModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent,
    LoginModalComponent
  ],
  providers: [
    LoginActions,
    LoginEpics
  ],
  exports: [
    LoginComponent
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class LoginModule {
}
