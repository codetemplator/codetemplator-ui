import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationsComponent} from './applications.component';
import {ApplicationsActions} from './applications.actions';
import {ApplicationsService} from './applications.service';
import {MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [
    ApplicationsComponent
  ],
  providers: [
    ApplicationsActions,
    ApplicationsService
  ]
})
export class ApplicationsModule {
}
