import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { NavComponent } from './components/template/nav/nav.component';

export const routes: Routes = [
    { path: 'nav', component: NavComponent, children: [
        { path: '', component: HomeComponent},
        { path: 'product', component: ProductCrudComponent}
    ]}
];
