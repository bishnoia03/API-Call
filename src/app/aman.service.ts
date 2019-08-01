import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class AmanService {
private url = '';

  constructor(private http: Http) {
  }

}
