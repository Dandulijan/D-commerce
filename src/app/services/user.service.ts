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
  addUser(user: any) {
    this.users.push(user);
  }

  updateUser(id: number, updated: any) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) this.users[index] = { ...this.users[index], ...updated };
  }

  deleteUser(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (user) user.status = 'inactive'; // soft delete
  }
}
