import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoadingComponent} from './loading/loading.component';
import {TokenInterceptor} from './token-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    RouterModule,
    LoadingComponent
  ],
  providers: []
})
export class CoreModule {

  constructor() {
  }
}
