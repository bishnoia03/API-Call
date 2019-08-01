import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  private url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: Http) { }
  deleteme(param) {
    return  this.http.delete(this.url + '/' + param.id);
  }
}
