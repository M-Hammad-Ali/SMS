import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login/login.service';
import { ClassService } from '../core/class/class.service';
import { ActivatedRoute } from '@angular/router';

import {TeacherDto} from '../models/teachers';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  classId:number;
  adminId:any;
  teacherList:TeacherDto;

  constructor(private loginService:LoginService, private classService: ClassService, private route: ActivatedRoute) {
    this.classId = +this.route.snapshot.paramMap.get('id');
    this.adminId = {"schoolAdminId":this.loginService.id};

  }

  ngOnInit(): void {
    this.classService.getClassTeachers(this.classId,this.adminId).subscribe(
      (data)=>{
        this.teacherList = data;
        console.log(data);
      }
    )
    localStorage.setItem('classId', '' + this.classId);
    this.classService.classId = this.classId;
  }

}
