import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { PropertyDetails } from './property-details/property-details';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home)
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'property-details',
    component: PropertyDetails
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];