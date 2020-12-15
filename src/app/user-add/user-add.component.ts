import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Input() user: User = { username: '', email: '', password: '' };
	constructor(private userService: UserService, private location: Location) { }

  ngOnInit(): void {
  }

  save(): void {
		this.userService.addUser(this.user).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}

}
