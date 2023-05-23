import { Component, OnInit } from '@angular/core';
interface cInter{
  name:string;

  population:number;
}
const countryArray:cInter[]=[
  {
    name:'India',
    population:1233678790,
  },
  {
    name:'Russia',
    population:1233678770,
  }
]

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {
  constructor(){}
  ngOnInit(){}
    cContainArray=countryArray;
    
  

}
