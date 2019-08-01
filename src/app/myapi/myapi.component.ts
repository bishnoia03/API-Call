import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-myapi',
  templateUrl: './myapi.component.html',
  styleUrls: ['./myapi.component.css']
})
export class MyapiComponent implements OnInit {
post:any[];
private url='/assets/data/emp.json';
  constructor(private http:Http) {
    http.get(this.url)
    .subscribe(response =>{
      console.log(response.json());
      this.post=response.json();
    });
   }
  //  delete
   fun(post){
    this.http.delete(this.url+'/'+post.id).subscribe(res=>{
      let index=this.post.indexOf(post);
      this.post.splice(index,1)
    });
    }
    createPost(input: HTMLInputElement) {
      const post: any = { title: input.value };
      input.value = '';
  
      this.http.post(this.url, JSON.stringify(post))
        .subscribe(response => {
          post['id'] = response.json().id;
          this.post.splice(0, 0, post);
          console.log(response.json());
        });
    }
  ngOnInit() {
  }

}
