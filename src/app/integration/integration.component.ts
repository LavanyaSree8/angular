import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit{
  public getjsonvalue:any;
  public postjsonvalue:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
      
  }
  public getMethod(){
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe((data)=>{
      console.log(data);
      this.getjsonvalue=data;
    });

  }
  public postMethod(){
    const header=new HttpHeaders({
      contentType:'application/json'
    })
    let body={
      title: 'foo',
    body: 'bar',
    userId: 1,

    };
    this.http.post("https://jsonplaceholder.typicode.com/posts",body,{headers:header}).subscribe((data)=>{
      console.log(data);
      this.postjsonvalue=data;

    })
    
    
  }

}
