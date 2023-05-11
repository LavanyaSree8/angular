import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './postmodel';


@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {
  title=""
  content=""
  loadedposts=[];
  constructor(private http:HttpClient){}
  ngOnInit() {}
  // onCreatePost(postdata:Post){
    //  this.http.post("https://ng-com-2f7e5-default-rtdb.firebaseio.com/posts.json",postdata).subscribe(responsedata=>{
      // console.log(responsedata);
    //  });

  // }
  // onFetchPost(){
    // this.http.get("https://ng-com-2f7e5-default-rtdb.firebaseio.com/posts.json").pipe(
      // map((responsedata=>{
        // const postsArray=[];
        // for(const key in responsedata){
          // if(responsedata.hasOwnProperty(key)){
            // postsArray.push({...responsedata[key],id:key});
          // }
        // }
        // return postsArray;
      // })
    // )
    // .subscribe(posts=>{
      // console.log(posts);
    // })

  // }

}
