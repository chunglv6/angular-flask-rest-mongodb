import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  @Input() account: Account = { 
    _id:'',
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
  constructor(private route: ActivatedRoute, private accountService: AccountService) { }
  last_id='';
page=1;
prePage;
nextpage;
totalPage;
total_record;
 pages = [1,2,3,4,5,6,7,8,9,10]

  ngOnInit(): void {
    this.search_account();
    
  }
  getAccounts(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      console.log(accounts.length)
      this.accounts = accounts;
      this.dataSource =  new MatTableDataSource<Account>(this.accounts);
      this.dataSource.paginator = this.paginator;
    });
  }
  delete(account: Account): void {
		this.accountService.deleteAccount(account).subscribe(success=> {this.getAccounts();});		
	}

  displayedColumns: string[] = ['account_number', 'balance', 'firstname', 'lastname','age','gender','address','employer','email','city','state','Actions'];
  dataSource :any

  @ViewChild(MatPaginator) paginator: MatPaginator;
  //dataSource = new MatTableDataSource<Account>(this.accounts);


  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  search_account(){
    this.page = 1;
    const paginator  = {
      _id:this.account._id,
    account_number: this.account.account_number,
    balance: this.account.balance,
    firstname: this.account.firstname,
    lastname: this.account.lastname,
    age: this.account.age,
    gender: this.account.gender,
    address: this.account.address,
    employer: this.account.employer,
    email: this.account.email,
    city: this.account.city,
    state: this.account.state,
    page:this.page,
    last_id:''
    }

    this.accountService.searchAccount(paginator).subscribe(data =>{
      this.accounts = JSON.parse(data.accounts);
      this.total_record = Number(data.total_record)
      console.log(this.accounts)
      this.dataSource =  new MatTableDataSource<Account>(this.accounts);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  changepage(event){
    if(this.total_record % 100 == 0){
      this.totalPage = this.total_record/100
    }else{
      this.totalPage = this.total_record/100+1
    }
    const content = event.target.innerHTML
    if(content=='Previous'){
      this.page = this.page -1
      if(this.page < 1){
        this.page = 1
      }
    }else if(content =='Next'){
      if(this.page<this.totalPage){
        this.page = this.page + 1; 
        if(this.page > this.totalPage){
          this.page = this.totalPage
        }
      }
    }else{
      this.page = Number(content)
    }
    const paginator  = {
    account_number: this.account.account_number,
    balance: this.account.balance,
    firstname: this.account.firstname,
    lastname: this.account.lastname,
    age: this.account.age,
    gender: this.account.gender,
    address: this.account.address,
    employer: this.account.employer,
    email: this.account.email,
    city: this.account.city,
    state: this.account.state,
    page:this.page,
    last_id:this.last_id
    }
    this.accountService.searchAccount(paginator).subscribe(data =>{
      this.accounts = JSON.parse(data.accounts);
      this.dataSource =  new MatTableDataSource<Account>(this.accounts);
      this.dataSource.paginator = this.paginator;
    });
  }

}

