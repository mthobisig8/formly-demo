import { Routes } from '@angular/router';
import { FormlyPlaygroundComponent } from './pages/formly-playground/formly-playground.component';

export const routes: Routes = [
  {
    path: 'formly-playground',
    component: FormlyPlaygroundComponent,
  },
  {
    path: '',
    redirectTo: '/formly-playground',
    pathMatch: 'full',
  },
];
