import { NgModule }                                     from '@angular/core';
import { BrowserModule }                                from '@angular/platform-browser';
import { FormsModule }                                  from '@angular/forms';
import { RouterModule }                                 from '@angular/router';
import { Http ,HttpModule }                                   from '@angular/http';
import { HttpInterceptorModule, HttpInterceptorService } from 'ng-http-interceptor';

import { AppComponent }             from './app.component';
import { NavbarComponent }          from './navbar.component';
import { LeftMenuComponent }        from './left-menu.component';
import { ProgramDetailComponent }   from './program-detail.component';
import { ProgramComponent }         from './programs.component';
import { UserComponent }            from './user.component';
import { DashboardComponent }       from './dashboard.component';

import { UserService }              from './user.service';
import { ProgramService }           from './program.service';

import { AppRoutingModule }         from './app-routing.module';



@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HttpInterceptorModule

   ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftMenuComponent,
    ProgramDetailComponent,
    ProgramComponent,
    DashboardComponent,
    UserComponent

  ],
  providers: [UserService, ProgramService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
