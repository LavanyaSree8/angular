import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
    regform=new FormGroup({
      password:new FormControl("",[Validators.required,this.uppercase])
    })
    uppercase(c:any){
      let pattern=/[A-Z]/
      if(pattern.test(c.value))
      {
       return null
      }
      return {'noupper':true}
    }
    show(){
      console.log(this.regform)
    }

}
