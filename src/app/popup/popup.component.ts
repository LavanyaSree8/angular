import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordComponent } from '../password/password.component';
import { OperatorsComponent } from '../operators/operators.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor( private dialog:MatDialog){}
  show=true

  openDialog(){
  this.dialog.open(OperatorsComponent)
  }
}
