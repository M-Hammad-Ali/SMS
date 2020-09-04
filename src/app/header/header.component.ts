import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin:boolean;
  isSchoolAdmin:boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
