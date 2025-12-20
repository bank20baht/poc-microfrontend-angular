import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter.component').then((m) => m.CounterComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  }
];
