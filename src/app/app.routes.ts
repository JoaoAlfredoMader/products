import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
  },

];
