import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewCategoryComponent } from './components/Modals/new-category/new-category.component';
import { DropDownInTableComponent } from './components/drop-down-in-table/drop-down-in-table.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit:/id', component: NewCategoryComponent},
  {path: 'dropdown-table', component: DropDownInTableComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
