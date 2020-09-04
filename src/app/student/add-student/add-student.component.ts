import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/login/login.service';
import { ClassService } from 'src/app/core/class/class.service';
import {StudentService} from '../../core/student/student.service'
import {AddStudentDto} from '../../models/addStudent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudentForm : FormGroup;
  student:AddStudentDto;

  constructor(private fb:FormBuilder,private loginService:LoginService,
              private classService:ClassService,private studentService: StudentService,
              private router:Router) { }

  ngOnInit(): void {
    this.addStudentForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      fatherName:['',Validators.required],
      contactNo:['',Validators.required],
    })
  }

  addStudent():void{
    this.student = {
      adminId : this.loginService.id,
      classId : this.classService.classId,
      firstName : this.addStudentForm.get('firstName').value,
      lastName : this.addStudentForm.get('lastName').value,
      fatherName: this.addStudentForm.get('fatherName').value,
      contactNo : this.addStudentForm.get('contactNo').value
    }

    this.studentService.createStudent(this.student).subscribe(
      (data) => {
        if(data.isCreated === true){
          this.router.navigate([`/student/${this.classService.classId}/List`]);
        }
      }
    )
  }
}
