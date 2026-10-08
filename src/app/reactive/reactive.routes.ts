import { Routes } from '@angular/router';
import { BasicPage } from './pages/basic-page/basic-page';
import { DynamicPage } from './pages/dynamic-page/dynamic-page';
import { SwitchesPage } from './pages/switches-page/switches-page';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Basic Form',
        component: BasicPage,
      },
      {
        path: 'dynamic',
        title: 'Dynamic Form',
        component: DynamicPage,
      },
      {
        path: 'switches',
        title: 'Switches Form',
        component: SwitchesPage,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
