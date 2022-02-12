import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(private httpClient:HttpClient) { }
  
  loginUser(user1:User):Observable<any>{
    console.log(user1)
    return this.httpClient.post(`${baseUrl}/users/login`,user1);
  }
}
