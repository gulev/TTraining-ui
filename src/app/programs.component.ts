import { Component }              from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Http }                   from '@angular/http';
import { ProgramService }         from './program.service';

import { FileUploader }           from 'ng2-file-upload';

@Component({
  selector: 'program',
  template: `
        <a style="float:left !important; margin-left:10px !important;" href="#"class="btn btn-success">
         <i class="icon-bolt"></i>
         Add New Program
       </a>
       <div style="clear:both; margin-top:10px;"></div>
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

        <div style="clear:both;">
          <div ng2FileDrop  [uploader]="uploader">
            <input type="file" ng2FileSelect [uploader]="uploader" />
          </div>
        </div>


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
  stuff: Array<any> = [];
  uploader = new FileUploader({url: `http://localhost:2000/api/v1/Upload`});
  loadProgram() {
   this.programService.getProgram().subscribe(data => this.programs = data);
 }

 ngOnInit() {
  this.loadProgram();
 }

}
