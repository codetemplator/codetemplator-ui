import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationsComponent} from './applications.component';
import {ApplicationsActions} from './applications.actions';
import {ApplicationsService} from './applications.service';
import {MatSidenavModule} from '@angular/material';
import { ListApplicationsComponent } from './list-applications/list-applications.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [
    ApplicationsComponent,
    ListApplicationsComponent
  ],
  providers: [
    ApplicationsActions,
    ApplicationsService
  ]
})
export class ApplicationsModule {
}
