import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote',
    loadChildren: () => loadRemoteModule('remote', './Routes').then((m) => m.routes),
  },
];
