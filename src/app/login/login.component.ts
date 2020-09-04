import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';

import {LoginService} from '../core/login/login.service';
import { Users } from '../models/users';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user:Users;
  loginForm : FormGroup;
  userResponse: Users;
  isAdmin:boolean;
  isSchoolAdmin:boolean;


  constructor(private login: LoginService,private fb:FormBuilder,private router : Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
    console.log(this.loginForm);
  }

  onSubmit(){
    this.user = {
      'user_name':this.loginForm.value.userName,
      "password":this.loginForm.value.password
    };

    this.login.verifyUser(this.user).subscribe(
      (data)=>{
        this.userResponse = data;
        if(this.userResponse[0].isAdmin == true){
          this.isAdmin = true;
          this.isSchoolAdmin = false;
          localStorage.setItem('userId',this.userResponse[1][0].id);
          localStorage.setItem('userName',this.userResponse[1][0].user_name)
          this.login.id = this.userResponse[1][0].id;
          this.login.userName = this.userResponse[1][0].user_name;
          this.router.navigate(['/admin']);
        }
        else if(this.userResponse[0].isSchoolAdmin == true){
          this.isAdmin = false;
          this.isSchoolAdmin = true;
          localStorage.setItem('userId',this.userResponse[1][0].id);
          localStorage.setItem('userName',this.userResponse[1][0].user_name)
          this.login.id = this.userResponse[1][0].id;
          this.login.userName = this.userResponse[1][0].user_name;
          this.router.navigate([`/class/${this.userResponse[1][0].id}/List`]);
        }
        else if (this.userResponse[0].isAdmin == false && this.userResponse[0].isSchoolAdmin  == false){
          localStorage.setItem('isAdmin' , 'false');
          localStorage.setItem('isSchoolAdmin' , 'false');
          this.login.id = null;
          this.login.userName = '';
          console.log('Not a user');
        }
      }
    )
  }
}
