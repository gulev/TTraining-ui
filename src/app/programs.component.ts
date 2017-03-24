import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { ProgramService } from './program.service';

@Component({
  selector: 'program',
  template: `
  <div>
   <button (click)="loadProgram()">Load program</button>
   {{ programs | json }}
 </div>
  `
})

export class ProgramComponent {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private programService: ProgramService
  ) {}

  programs = {};
  loadProgram() {
   this.programService.getProgram().subscribe(data => this.programs = data);
   //console.log( this.userService.getUser())
 }

}
