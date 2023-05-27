import { Component, OnInit } from '@angular/core';
import {StudentService }from "../../services/student.service"
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

 
  constructor(
    private userService: UsersService
  ){

  }

  ngOnInit(): void {
    // this.userService.getAll();
  }
  
  

}
