import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/core/class/class.service';
import { LoginService } from 'src/app/core/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-class',
  templateUrl: './delete-class.component.html',
  styleUrls: ['./delete-class.component.css']
})
export class DeleteClassComponent implements OnInit {
  deleteClassForm:FormGroup;
  adminId:number;
  classId:number;

  constructor(private fb: FormBuilder, private classService: ClassService,
              private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.deleteClassForm = this.fb.group({
      classId : ['',[Validators.required]]
    })
  }

  deleteClass():void{
    this.classId = this.deleteClassForm.get('classId').value;
    this.adminId = this.loginService.id;
    this.classService.deleteClass(this.classId, this.adminId ).subscribe(
      (data) => {
        if (data.isDeleted === true){
          this.router.navigate([`/class/${this.loginService.id}/List`])
        }
      }
    )
  }

}
