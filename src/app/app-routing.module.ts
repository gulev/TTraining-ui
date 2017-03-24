import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { ProgramComponent }      from './programs.component';
import { UserComponent }      from './user.component';
import { ProgramDetailComponent }  from './program-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ProgramDetailComponent },
  { path: 'programs',   component: ProgramComponent },
  { path: 'user',   component: UserComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
