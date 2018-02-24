import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {SignupModalComponent} from './signup-modal/signup-modal.component';
import {CoreModule} from '../../core/core.module';
import {SignupActions} from './signup.actions';
import {SignupEffects} from './signup.effects';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    SignupComponent,
    SignupModalComponent
  ],
  exports: [
    SignupComponent
  ],
  providers: [
    SignupActions,
    SignupEffects
  ],
  entryComponents: [
    SignupModalComponent
  ]
})
export class SignupModule {
}
