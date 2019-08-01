import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ServemeService {

  private url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: Http) {
}
  getme() {
    return  this.http.get(this.url);
  }

}

