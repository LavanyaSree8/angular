import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskid=3
  constructor(private http:HttpClient) { }
  todolist=[
    {id:1,task:"Task1"},
    {id:2,task:"Task2"}

  ]
  getData(){
    this.http.get<any>
  }
  addTodo(taskname:any){
    this.todolist.push({"id":this.taskid++,"task":taskname})
  }
  deletetodo(index:number){
    this.todolist.splice(index,1)
  }
}
