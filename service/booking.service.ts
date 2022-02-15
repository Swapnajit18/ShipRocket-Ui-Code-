import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  public booking(user:any){
    return this.http.post(`${baseUrl}/booking/createBookingData`,user);

  }
}
