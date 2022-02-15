import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackingService } from 'service/tracking.service';
import { Tracking } from '../tracking';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.scss']
})
export class TrackingPageComponent implements OnInit{

  track:Tracking =new Tracking();

 
  
  constructor(private http:HttpClient,private trackingService:TrackingService){ }

  ngOnInit(){
    
  }

  formSubmit(){
    console.log(this.track);
    this.trackingService.trackPackage(this.track).subscribe(
      (data: any)=>{
        console.log(data)
          Swal.fire({
          icon: 'success',
          title: 'Check Your status',
          text: 'Your Item is already ' + data.status,
          footer: '<a href="">Why do I have this issue?</a>'
        })
        
     
        //succes;
      },
      (error)=>{
        console.log(error)
         Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
        //error
      }
    )

    }
    

 



}
