import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes_dashboard: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(c => c.DashboardComponent)
    // loadChildren: () => import('./dashboard/dashboard.routes'),
  }
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: DashboardComponent,
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  // },
];
