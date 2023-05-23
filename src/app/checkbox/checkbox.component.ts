import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit{
  regForm!:FormGroup
  langs=['c','java','python','php','javascript']
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
      this.regForm=this.fb.group({
        languages:this.fb.array([])
      })
  }
  handlelangs(e:any){
    let langarr=this.regForm.get('languages') as FormArray;
    if(e.target.checked){
      langarr.push(new FormControl(e.target.value))
    }
    else{
      let i=0;
      langarr.controls.forEach(
        (l:any)=>{
          if(l.value==e.target.value){
            langarr.removeAt(i);
            return
          }
          i++
        }
      )
    }
  }

}
