import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  post:any[];
  post1:any[];
  private result='https://reqres.in/api/users?page=2';
  private result1='https://reqres.in/api/unknown';
  
  constructor(private http:Http) { 
    http.get(this.result)
    .subscribe(response =>{
      console.log(response.json());
      this.post=response.json().data;
    });
    http.get(this.result1)
    .subscribe(response =>{
      console.log(response.json());
      this.post1=response.json().data;
    });
  }
fun(post){
this.http.delete(this.result+'/'+post.id).subscribe(res=>{
  let index=this.post.indexOf(post);
  this.post.splice(index,1)
});
}
fun1(post1){
  this.http.delete(this.result1+'/'+post1.id).subscribe(res=>{
    let index=this.post1.indexOf(post1);
    this.post1.splice(index,1)
  });
  }
  ngOnInit() {
  }

}