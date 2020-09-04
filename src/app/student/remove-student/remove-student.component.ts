import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/core/class/class.service';
import { StudentService } from 'src/app/core/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent implements OnInit {
  deleteStudentForm: FormGroup;
  studentId:number;
  classId:number;

  constructor(private fb: FormBuilder,private classService:ClassService,
    private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.deleteStudentForm = this.fb.group({
      studentId : ['',Validators.required]
    })
  }

  deleteStudent():void{
    this.studentId = +this.deleteStudentForm.get('studentId').value;
    this.classId = this.classService.classId;
    this.studentService.deleteStudent(this.classId,this.studentId).subscribe(
      (data)=>{
        if(data.isDeleted == true){
          this.router.navigate([`/student/${this.classId}/List`])
        }
      }
    )
  }
}
