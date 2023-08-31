import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
      this.userService.getAll().subscribe(users => this.users = users);
  }

  filterResults(text: string) {
    if (!text) {
      this.users;
    }
    this.users = this.users.filter(
      element => element.name.toLowerCase().includes(text.toLowerCase()) || element.firstname.toLowerCase().includes(text.toLowerCase()) || element.phone.toLowerCase().includes(text.toLowerCase()) || element.email.toLowerCase().includes(text.toLowerCase()) || element.address.toLowerCase().includes(text.toLowerCase()) || element.postalZip.toLowerCase().includes(text.toLowerCase()) || element.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}