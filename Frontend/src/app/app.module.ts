import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/system/item-card/item-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ItemListComponent } from './components/system/item-list/item-list.component';
import {MatListModule} from '@angular/material/list';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSystemComponent } from './components/system/add-system/add-system.component';
import { SystemDetailComponent } from './components/system/system-detail/system-detail.component';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HttpServiceService } from './services/http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemListComponent,
    NavBarComponent,
    AddSystemComponent,
    SystemDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
