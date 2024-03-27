import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
    {
        path: 'card',
        component: CardComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
    
];
