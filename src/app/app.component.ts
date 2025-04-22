import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { HeaderComponent } from './Layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'D-Commerce-Dashboard';
}
