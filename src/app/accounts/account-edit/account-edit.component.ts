import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  @Input() account: Account;
  constructor(private route: ActivatedRoute, private accountService: AccountService, private location: Location) { }

  ngOnInit(): void {
    this.getAccount();
  }
	getAccount(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.accountService.getAccount(id).subscribe(account => this.account = account);
  }
  
  save(): void {		
		this.accountService.updateAccount(this.account).subscribe(success=> {this.goBack();});
  }
  
  goBack(): void {
		this.location.back();
	}

}
