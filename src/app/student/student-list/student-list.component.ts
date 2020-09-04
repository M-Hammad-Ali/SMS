import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/login/login.service';
import { ClassService } from '../../core/class/class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
  classId:number;
  adminId:any;
  studentList:any;

  constructor(private loginService:LoginService, private classService:ClassService,private route:ActivatedRoute) {
    this.classId = +this.route.snapshot.paramMap.get('id');
    this.adminId = { "schoolAdminId" : this.loginService.id};
  }

  ngOnInit(): void {
    this.classService.getClassStudents(this.classId,this.adminId).subscribe(
      (data)=>{
        this.studentList = data;
        console.log(data);
      }
    )
    localStorage.setItem('classId', '' + this.classId);
    this.classService.classId = this.classId;
  }

}
