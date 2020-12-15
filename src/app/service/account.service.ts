import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from '../model/account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AccountService {

  private userUrl = 'http://localhost:5000';  // URL to REST API

  constructor(private http: HttpClient) { }

  /** GET account from the server */
  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.userUrl + '/account');
  }
  
  /** GET account by id. Will 404 if id not found */
  getAccount(id: string): Observable<any> {
    const url = `${this.userUrl}/account/${id}`;
    return this.http.get<Account>(url);
  }
  
  /** POST: add a new account to the server */
  addAccount(account: Account) {
    return this.http.post(this.userUrl + '/account', account, httpOptions);
  }
  
  /** PUT: update the account on the server */
  updateAccount(account: Account): Observable<any> {
    return this.http.put(this.userUrl + '/account', account, httpOptions);
  }
  
  /** DELETE: delete the account from the server */
  deleteAccount(account: Account) {
	  if (confirm("Are you sure to delete?")) {
		const id = account._id['$oid'];
		const url = `${this.userUrl}/account/${id}`;
		return this.http.delete(url, httpOptions);
	  }
	  return of({});
  }

  searchAccount(account:Account): Observable<any>{
    return this.http.post(this.userUrl + '/search_account',account,httpOptions);
  }
  
}