import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationsComponent} from './applications.component';
import {ApplicationsActions} from './applications.actions';
import {ApplicationsService} from './applications.service';

@NgModule({
  imports: [
    CommonModule
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
