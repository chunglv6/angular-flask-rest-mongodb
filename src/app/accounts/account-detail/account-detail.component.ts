import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Account} from 'src/app/model/account'
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  account: Account;
  constructor(private route: ActivatedRoute, private accountService: AccountService, private location: Location) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.accountService.getAccount(id).subscribe(account => this.account = account);
  }
  
  goBack(): void {
		this.location.back();
	}

}
