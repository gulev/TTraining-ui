import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { UserService } from './user.service';

@Component({
  selector: 'user',
  template: `
  <div>
   {{ profile | json }}
 </div>
  `
})

export class UserComponent {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  profile = {};
  loadUser() {
   this.userService.getUser().subscribe(data => this.profile = data);
   //console.log( this.userService.getUser())
 }
 ngOnInit() {
  this.loadUser();
 }

}
