import {LandingComponent} from './landing/landing.component';
import {ApplicationsComponent} from './applications/applications.component';
import {LoggedInGuard} from './router/logged-in.guard';

export const routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
    canActivate: [LoggedInGuard]
  }
];
