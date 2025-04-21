import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { USERS } from '../Data/Users';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = USERS;

  constructor(private UserServes: UserService) {}

  ngOnInit(): void {
    this.users = this.UserServes.getUsers();
  }
}
