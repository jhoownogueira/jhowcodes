import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { LayoutDefault } from './layouts/layout-default/layout-default.component';
import { LayoutLogged } from './layouts/layout-logged/layout-default.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutDefault,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: '',
    component: LayoutLogged,
    children: [{ path: 'bem-vindo', component: BemVindoComponent }],
  },
];
