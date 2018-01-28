import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationsComponent} from './applications.component';
import {ApplicationsActions} from './applications.actions';
import {ApplicationsService} from './applications.service';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule} from '@angular/material';
import {ListApplicationsComponent} from './list-applications/list-applications.component';
import {AddApplicationButtonComponent} from './add-application-button/add-application-button.component';
import {AddApplicationModalComponent} from './add-application-modal/add-application-modal.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ApplicationsComponent,
    ListApplicationsComponent,
    AddApplicationButtonComponent,
    AddApplicationModalComponent
  ],
  providers: [
    ApplicationsActions,
    ApplicationsService
  ],
  entryComponents: [
    AddApplicationModalComponent
  ]
})
export class ApplicationsModule {
}
