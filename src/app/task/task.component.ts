import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
data="";
// show=true;
log:any= [];
ontoggle(){
  // this.show=!this.show;
  this.log.push(this.log.length + 1);
}
regform=new FormGroup({
  uname:new FormControl("lav",[Validators.required,Validators.minLength(3)]),
  email:new FormControl("chaitu@",Validators.required)
})
show(){
  console.log(this.regform);
}
}
