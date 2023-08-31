import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>("/api/users");
  }
}