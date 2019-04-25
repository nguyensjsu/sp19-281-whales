import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {USERS} from './mock-user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users = USERS;
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor() {
}

  ngOnInit() {

  }

}
