import {LandingComponent} from './landing/landing.component';

export const routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent
  }
];
