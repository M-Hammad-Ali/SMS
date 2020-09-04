import { Component } from '@angular/core';
import { LoginService } from './core/login/login.service';
import { ClassService } from './core/class/class.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMS-Client';

  constructor(private loginService: LoginService,private classService:ClassService){
    this.loginService.id = +localStorage.getItem('userId');
    this.loginService.userName = localStorage.getItem('userName');
    this.classService.classId= +localStorage.getItem('classId')
  }
}
