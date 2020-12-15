import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AccountService } from 'src/app/service/account.service';
import {Account} from 'src/app/model/account'

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {

  @Input() account: Account = { 
    account_number: '',
    balance: '',
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    address: '',
    employer: '',
    email: '',
    city: '',
    state: ''
  };
	constructor(private accountService: AccountService, private location: Location) { }

  ngOnInit(): void {
  }

  save(): void {
		this.accountService.addAccount(this.account).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}
}
