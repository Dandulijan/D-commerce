import { Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { UserListComponent } from './Components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'products', component: ProductListComponent },

  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', redirectTo: 'dashboard' },
];
