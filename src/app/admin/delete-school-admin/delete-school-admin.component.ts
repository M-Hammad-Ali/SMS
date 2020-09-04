import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/adminPanel/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-delete-school-admin',
  templateUrl: './delete-school-admin.component.html',
  styleUrls: ['./delete-school-admin.component.css']
})
export class DeleteSchoolAdminComponent implements OnInit {
  deleteSchoolAdminForm : FormGroup;
  adminId: number ;

  constructor(private adminService: AdminService, private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.deleteSchoolAdminForm = this.fb.group({
      id: ['',[Validators.required]]
    })
  }

  deleteSchoolAdmin():void{
    this.adminId = this.deleteSchoolAdminForm.get('id').value ;

    this.adminService.deleteSchoolAdmins(this.adminId).subscribe(
      (data)=>{
        if(data.deleted == true){
          this.router.navigate(['admin']);
        }

      }
    )
  }


}
