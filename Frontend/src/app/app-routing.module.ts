import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSystemComponent } from './components/system/add-system/add-system.component';
import { ItemListComponent } from './components/system/item-list/item-list.component';
import { SystemDetailComponent } from './components/system/system-detail/system-detail.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: ItemListComponent},
  { path: 'add-system', component: AddSystemComponent},
  { path: 'old-system', component: ItemListComponent},
  { path: 'system-detail/:id', component: SystemDetailComponent},
  { path: 'user-register', component: UserRegisterComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: '**', component: ItemListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
