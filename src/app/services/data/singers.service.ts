import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SingersService {
  

  constructor(private http : HttpClient) { }

  getSingers() : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
