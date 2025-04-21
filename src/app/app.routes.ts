import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'products', component: ProductListComponent },

  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', redirectTo: 'dashboard' },
];
