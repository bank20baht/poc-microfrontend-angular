import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { FallbackComponent } from './components/fallback/fallback.component';

export const fallbackRoutes: Routes = [{ path: '', component: FallbackComponent }];

export const routes: Routes = [
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule('remote', './Routes')
        .then((m) => m.routes)
        .catch((error) => {
          console.error('Error loading remote component', error);
          return fallbackRoutes;
        }),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
