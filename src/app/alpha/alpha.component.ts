import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  post:any[];
  private url='https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http:Http) { 
    http.get(this.url)
    .subscribe(response =>{
      this.post=response.json();
      console.log(response.json());
    })
  }
fun(post){
this.http.delete(this.url+'/'+post.id).subscribe(res=>{
  let index=this.post.indexOf(post);
  this.post.splice(index,1)
})
}

  ngOnInit() {
  }

}
