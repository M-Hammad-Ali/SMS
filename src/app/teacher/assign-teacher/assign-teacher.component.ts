import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/core/class/class.service';
import { LoginService } from 'src/app/core/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {AssignTeacherDto} from '../../models/teachers';
import { TeacherService } from 'src/app/core/teacher/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.css']
})
export class AssignTeacherComponent implements OnInit {
  classList:any;
  assignTeacherForm: FormGroup;
  className:string;
  teacherId:number;
  assignTeacher: AssignTeacherDto;

  constructor(private classService: ClassService,private loginService:LoginService,
              private fb: FormBuilder, private teacherService:TeacherService,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.classService.getSchoolClasses(this.loginService.id).subscribe(
      (data)=>{
        this.classList = data;
        console.log(this.classList);
      }
    )
    this.assignTeacherForm = this.fb.group({
      teacherId:['',[Validators.required]],
    className:['',[Validators.required]]
    })
  }

  assignTeacherToClass():void {
      this.teacherId = +this.assignTeacherForm.get('teacherId').value;
      this.className = this.assignTeacherForm.get('className').value;
      this.assignTeacher = {
        "teacherId" : this.teacherId,
        "className" : this.className
      }
      this.teacherService.assignTeacher(this.assignTeacher).subscribe(
        (data)=>{
          if(data.isAssigned === true){
            this.router.navigate([`/class/${this.classService.classId}/teachers`])
          }
        }
      )
  }
}
