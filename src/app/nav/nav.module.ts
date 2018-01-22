import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {LoginModule} from './login/login.module';
import {SignupModule} from './signup/signup.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    LoginModule,
    SignupModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {
}
