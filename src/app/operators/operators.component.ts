import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    of(7,20,50).subscribe(
      (data)=>{
        console.log(data)
      }

    )
      
  }


}
