import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/login/login.service';

import {AddTeacherDto} from '../../models/teachers';
import { TeacherService } from 'src/app/core/teacher/teacher.service';

@Component({
  selector: 'app-add-new-teacher',
  templateUrl: './add-new-teacher.component.html',
  styleUrls: ['./add-new-teacher.component.css']
})
export class AddNewTeacherComponent implements OnInit {
  addTeacherForm: FormGroup;
  teacher: AddTeacherDto;

  constructor(private loginSerice: LoginService,private fb: FormBuilder,
              private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.addTeacherForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      contactNo: ['',Validators.required],
      emailId: ['',Validators.required],
      qualification: ['',Validators.required],
      experience: ['',Validators.required]
    })
  }

  addTeacher():void {
    this.teacher = {
      "firstName" : this.addTeacherForm.get('firstName').value,
      "lastName" : this.addTeacherForm.get('lastName').value,
      "contactNo" : this.addTeacherForm.get('contactNo').value,
      "emailId" : this.addTeacherForm.get('emailId').value,
      "qualification" : this.addTeacherForm.get('qualification').value,
      "experience" : this.addTeacherForm.get('experience').value,
      "adminId" : this.loginSerice.id
    }
    this.teacherService.addTeacher(this.teacher).subscribe(
      (data) => {
        if(data.isAdded == true){
          console.log('Teacher Added');
        }
      }
    )
  }

}
