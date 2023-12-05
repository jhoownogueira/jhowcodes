import { Routes } from '@angular/router';
import { LayoutDefault } from './layouts/layout-default/layout-default.component';
import { LayoutMenu } from './layouts/layout-menu/layout-default.component';
import { HomeComponent } from './home/home.component';
import { ComponentesComponent } from './componentes/componentes.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutMenu,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: '',
    component: LayoutDefault,
    children: [{ path: 'componentes', component: ComponentesComponent }],
  },
];
