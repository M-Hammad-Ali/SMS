import { Component, OnInit } from '@angular/core';
import {AdminService} from '../core/adminPanel/admin.service';
import { SchoolAdminsDto } from '../models/schoolAdmins';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  schoolAdmins : SchoolAdminsDto;

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getSchoolAdmins().subscribe(
      (data)=>{
        this.schoolAdmins = data;
        console.log(this.schoolAdmins);

      }
    )

  }


}
