import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Tracking } from 'src/app/tracking';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  httpClient: any;
 ;

  constructor(private http:HttpClient) { }

  trackPackage(track:Tracking){
    console.log(track)
    return this.http.get(`${baseUrl}/booking/trackingId/${track.trackingId}`);
  }
}
