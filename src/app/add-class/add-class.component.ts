import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../core/login/login.service';
import {AddClassDto} from '../models/addClass'
import { ClassService } from '../core/class/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  createClassForm:FormGroup;
  className :string;
  addClass:AddClassDto;

  constructor(private fb:FormBuilder,private loginService: LoginService,
              private classService:ClassService,private router: Router) { }

  ngOnInit(): void {
    this.createClassForm = this.fb.group({
      className: ['',[Validators.required]]
    })
  }

  createClass(): void{

    this.addClass = {
      "adminId" : this.loginService.id,
      "className" : this.createClassForm.value.className
    }
    this.classService.createClass(this.addClass).subscribe(
      (data)=>{
        if(data.isCreated ==true){
          this.router.navigate([`/class/${this.loginService.id}/List`])
        }
      }
    )

  }

}
