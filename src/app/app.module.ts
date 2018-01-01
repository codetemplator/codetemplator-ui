import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootReducer} from './root.reducer';
import {FormsModule} from '@angular/forms';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import * as persistState from 'redux-localstorage'
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {routes} from './routes';
import {NavModule} from './nav/nav.module';
import {NavEpics} from './nav/nav.epics';
import {UserEpics} from './user/user.epics';
import {HttpClientModule} from '@angular/common/http';
import {LandingModule} from './landing/landing.module';
import {LandingEpics} from './landing/landing.epics';
import {ArticlesModule} from './articles/articles.module';
import {ViewArticleEpics} from './view-article/view-article.epics';
import {ViewArticleModule} from './view-article/view-article.module';
import {AddArticleModule} from './add-article/add-article.module';
import {AddArticleEpics} from './add-article/add-article.epics';
import {IsLoggedInGuard} from './router/is-logged-in.guard';
import {EditArticleModule} from './edit-article/edit-article.module';
import {EditArticleEpics} from './edit-article/edit-article.epics';
import {SideNavModule} from './side-nav/side-nav.module';
import {SharedModule} from './shared/shared.module';
import {SideNavEpics} from './side-nav/side-nav.epics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({appId: 'blog'}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    NgReduxModule,
    NavModule,
    LandingModule,
    ArticlesModule,
    ViewArticleModule,
    AddArticleModule,
    EditArticleModule,
    SideNavModule,
    SharedModule
  ],
  providers: [
    IsLoggedInGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>,
              private navEpics: NavEpics,
              private userEpics: UserEpics,
              private landingEpics: LandingEpics,
              private viewArticleEpics: ViewArticleEpics,
              private addArticleEpics: AddArticleEpics,
              private editArticleEpics: EditArticleEpics,
              private sideNavEpics: SideNavEpics) {

    const epics = combineEpics(
      this.navEpics.showLoginModal,
      this.navEpics.hideAllModals,
      this.userEpics.login,
      this.landingEpics.fetchArticles,
      this.viewArticleEpics.fetchArticle,
      this.addArticleEpics.addArticle,
      this.editArticleEpics.fetchArticle,
      this.editArticleEpics.editArticle,
      this.sideNavEpics.fetchAllArticles
    );

    const middleware = [
      createEpicMiddleware(epics)
    ];

    if (!environment.production) {
      middleware.push(createLogger());
      middleware.push(reduxImmutableStateInvariant.default());
    }

    const enhancers = [];

    if (environment.hmr) {
      enhancers.push(persistState());
    }

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
  }

}
