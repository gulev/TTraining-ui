import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { ProgramService } from './program.service';

@Component({
  selector: 'program',
  template: `
				<div style="margin-left:10px !important;" *ngFor="let program of programs"
          [ngClass]="{'blue': (program.difficulty==='Begginer'), 'yellow': (program.difficulty==='Advanced'), 'red': (program.difficulty==='Pro')}"
          class="widget span4 noMargin"
          onTablet="span12"
          onDesktop="span4">
					<h2><span class="glyphicons fire"><i></i></span>{{ program.name }}</h2>
					<hr>
					<div class="content">
            <table class="table">
             <tr>
               <td>Description</td>
               <td>
                 <a style="float:right !important;" href="#" class="btn btn-info">{{ program.desc }}</a>
               </td>
             </tr>
             <tr>
               <td>Difficulty</td>
               <td>
                 <a style="float:right !important;" href="#" class="btn btn-info btn-setting">{{ program.difficulty }}</a>
               </td>
             </tr>
             <tr>
               <td>Goal</td>
               <td>
                 <a style="float:right !important;" href="#"class="btn btn-info">{{ program.goal }}</a>
               </td>
             </tr>
             <tr>
               <td>Days</td>
               <td>
                 <a style="float:right !important;" href="#" class="btn btn-info">{{program.days}}</a>
               </td>
             </tr>
           </table>
					</div>
				</div>


<!--
<div class="row-fluid sortable">
<div class="box span12">
  <div class="box-header" data-original-title>
    <h2><i class="halflings-icon white user"></i><span class="break"></span>Members</h2>

  </div>
  <div class="box-content">
    <table class="table table-striped table-bordered bootstrap-datatable datatable">
      <thead>
        <tr>
          <th>Username</th>
          <th>Date registered</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Dennis Ji</td>
        <td class="center">2012/01/01</td>
        <td class="center">Member</td>
        <td class="center">
          <span class="label label-success">Active</span>
        </td>
        <td class="center">
          <a class="btn btn-success" href="#">
            <i class="halflings-icon white zoom-in"></i>
          </a>
          <a class="btn btn-info" href="#">
            <i class="halflings-icon white edit"></i>
          </a>
          <a class="btn btn-danger" href="#">
            <i class="halflings-icon white trash"></i>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

</div>
-->
  `,
  styles:['.table th, .table td {border: none !important;}']
})

export class ProgramComponent {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private programService: ProgramService
  ) {}

  programs: Array<any> = []; //it has to be an object
  loadProgram() {
   this.programService.getProgram().subscribe(data => this.programs = data);
   //console.log( this.userService.getUser())
 }

 ngOnInit() {
  this.loadProgram();
 }

}
