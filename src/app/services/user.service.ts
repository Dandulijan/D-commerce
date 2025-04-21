import { Injectable } from '@angular/core';
import { USERS } from '../Data/Users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private users = USERS;
  getUsers() {
    return this.users;
  }
}
