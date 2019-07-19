import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8307/Api/PersonalDetails";

  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]> {  
    return this.http.get<User[]>(this.url + '/AllDetails');  
  } 
  updateUser(user:User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<User>(this.url + '/UpdateDetails/',  
    user, httpOptions);  
  }  
}
