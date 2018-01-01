import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {AboutComponent} from './about/about.component';
import {ArticlesComponent} from './articles/articles.component';
import {LandingActions} from './landing.actions';
import {LandingEpics} from './landing.epics';
import {ArticleCardComponent} from './articles/article-card/article-card.component';
import {SharedModule} from '../shared/shared.module';
import {ArticlesModule} from '../articles/articles.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ArticlesModule
  ],
  declarations: [
    LandingComponent,
    AboutComponent,
    ArticlesComponent,
    ArticleCardComponent
  ],
  exports: [
    LandingComponent
  ],
  providers: [
    LandingActions,
    LandingEpics
  ]
})
export class LandingModule {
}
