import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 data=["hyd","ban","lon"];
 @Input() childdata:string="";

 save(un:any,p:any){
console.log(un);
console.log(p);

 }
 
}
