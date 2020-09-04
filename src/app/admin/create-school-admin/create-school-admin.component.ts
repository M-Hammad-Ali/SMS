import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/adminPanel/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-school-admin',
  templateUrl: './create-school-admin.component.html',
  styleUrls: ['./create-school-admin.component.css']
})
export class CreateSchoolAdminComponent implements OnInit {
  schoolAdminForm : FormGroup;
  addSchoolAdmin : any;

  constructor(private adminService : AdminService, private fb : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.schoolAdminForm = this.fb.group({
      userName: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(5)]],
      schoolName: ['',Validators.required]
    })
  }

  createSchoolAdmin():void{
    this.addSchoolAdmin = {
      'user_name': this.schoolAdminForm.get('userName').value,
      'password': this.schoolAdminForm.get('password').value,
      'schoolName': this.schoolAdminForm.get('schoolName').value
    };
    this.adminService.createSchoolAdmins(this.addSchoolAdmin).subscribe(
      (data) => {
        if(data.added == true) {
          this.router.navigate(['admin']);
        }
      }
    )
  }
}
