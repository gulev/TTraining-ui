import { Component, OnInit } from '@angular/core';



@Component({
  moduleId: module.id, // not an error
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit{


  ngOnInit(): void{
    console.log("test")
  }
 }
