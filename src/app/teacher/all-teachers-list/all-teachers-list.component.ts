import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login/login.service';

import {RetrieveTeacherList} from '../../models/RetrieveAlTeacher';
import {TeacherService} from '../../core/teacher/teacher.service';

@Component({
  selector: 'app-all-teachers-list',
  templateUrl: './all-teachers-list.component.html',
  styleUrls: ['./all-teachers-list.component.css']
})
export class AllTeachersListComponent implements OnInit {
  teachersList: RetrieveTeacherList[] ;
  adminId: number;

  constructor(private loginService: LoginService, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.adminId = this.loginService.id;
    this.teacherService.getAllTeachersList(this.adminId).subscribe(
      (data) => {
        console.log(data);
        this.teachersList = data;
      }
    )
  }
}
