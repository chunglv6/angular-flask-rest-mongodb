import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountAddComponent } from './accounts/account-add/account-add.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AppGuard } from './guards/app.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserListComponent ,canActivate: [AppGuard]},
  { path: 'detail/:id', component: UserDetailComponent ,canActivate: [AppGuard]},
  { path: 'edit/:id', component: UserEditComponent ,canActivate: [AppGuard]},
  { path: 'add', component: UserAddComponent ,canActivate: [AppGuard]},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'accountList', component: AccountListComponent,canActivate: [AppGuard] },
  { path: 'accountDetail/:id', component: AccountDetailComponent ,canActivate: [AppGuard]},
  { path: 'accountEdit/:id', component: AccountEditComponent ,canActivate: [AppGuard]},
  { path: 'accountAdd', component: AccountAddComponent ,canActivate: [AppGuard]},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
