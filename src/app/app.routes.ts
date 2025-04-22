import { Routes } from '@angular/router';
import { ProfileComponent } from '../app/Components/profile/profile.component';
import { ProductListComponent } from '../app/Components/product-list/product-list.component';
import { ProductDetailsComponent } from '../app/Components/product-details/product-details.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { UserListComponent } from '../app/Components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'products', component: ProductListComponent },

  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', redirectTo: 'dashboard' },
];
