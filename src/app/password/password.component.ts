import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
regform!: FormGroup;
constructor(private fb:FormBuilder){
}
  ngOnInit(): void {
    this.regform=this.fb.group({
      uname:new FormControl('',[Validators.required,Validators.minLength(4)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      cpassword:new FormControl('',[Validators.required]),
    },{
      validators:this.Mustmatch('password','cpassword')
    })
  }
Mustmatch(password: any,cpassword: any){
  return (formGroup:FormGroup)=>{
    const pcontrol=formGroup.controls[password];
    const cpcontrol=formGroup.controls[cpassword];
  
  if(cpcontrol.errors && !cpcontrol.errors['Mustmatch']){
    return
  }
  if(pcontrol.value !== cpcontrol.value){
    cpassword.setErrors({Mustmatch:true});
  }
  else{
    cpassword.setErrors(null);
  }



}
}
}
