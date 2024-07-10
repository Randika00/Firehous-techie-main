import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private apiUrl = "http://localhost:8080/api/users"

 constructor(private http:HttpClient){}

     register(user:User): Observable<User> {
     return this.http.post(`${this.apiUrl}/register`,user);
     }

     login(user:User): Observable<User> {
      return this.http.post(`${this.apiUrl}/login`,user);
      }

}
