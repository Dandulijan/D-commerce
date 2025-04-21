import { Injectable } from '@angular/core';
import { user, USERS } from '../Data/Users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users = USERS;
  getUsers(): user[] {
    return this.users;
  }
}
