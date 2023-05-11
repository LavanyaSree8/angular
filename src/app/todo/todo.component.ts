import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
taskinput=""
constructor(private ts:TodoService){}
addtask(){
  this.ts.addTodo(this.taskinput);
  this.taskinput=""

}
addreset(){
this.taskinput=""
}
}
