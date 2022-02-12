import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AgGridService {

  constructor(private http: HttpClient) {}

  getAllBooks(user:any): Observable<any> {
    return this.http.get(`${baseUrl}/list`,user);
  }
  
}