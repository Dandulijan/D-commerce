import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { USERS } from '../Data/Users';

@Component({
  selector: 'app-user-list',
  imports: [NgClass],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = USERS;
}
