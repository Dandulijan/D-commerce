import { Component } from '@angular/core';
import { USERS } from '../../Data/Users';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  AdminUser = USERS.find((user) => user.role === 'admin');
}
