import { Component } from '@angular/core';
import { FormArray,FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  table:any[]=[];
  constructor(private fb:FormBuilder){

  }
  regForm=this.fb.group(
    {
      uname:["",Validators.required],
      password:["",Validators.required],
      email:["",Validators.required]
      // mobiles:this.fb.array(
      //   [
      //     [],
      //     []
      //   ]
      // )
      
    }
  )
save(){
  this.table.push(this.regForm.value)
  this.regForm.reset()
}
delete(index:number){
  this.table.splice(index,1)

}
edit(item:any){
  this.regForm.patchValue(item)
}
  

}
