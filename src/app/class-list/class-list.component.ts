import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ClassService} from '../core/class/class.service'

@Component({
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  id:number;
  classList :any;

  constructor(private route: ActivatedRoute,private clasService : ClassService,private router:Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.clasService.getSchoolClasses(this.id).subscribe(
      (data)=>{
        console.log(data);
        this.classList = data;
      }
    )
  }
}
