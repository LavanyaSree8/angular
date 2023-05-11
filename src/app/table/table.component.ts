import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  table:any[]=[];
  constructor(private fb:FormBuilder){
}
regform=this.fb.group(
  {
    uname:["",Validators.required],
    password:["",Validators.required],
    email:["",Validators.required]
  }
)
save(){
  this.table.push(this.regform.value)
  this.regform.reset()
}
delete(index:number){
 this.table.splice(index,1) 
}
edit(item:any){
  this.regform.patchValue(item)
  
}

}
