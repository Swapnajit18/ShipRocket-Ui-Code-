import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
//import { TrackingService } from '../service/tracking-service.service';
import { Params, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.scss']
})
export class TrackingPageComponent implements OnInit{

 

  
  constructor(
    ){    
  }

  ngOnInit(){
    /*
    
    this.trackingId = this.Activatedroute.snapshot.queryParamMap.get('trackingId')||0;
    if(this.trackingId){
      this.trackingService.trackPackage(this.trackingId).subscribe(
        (response: any) => {
          this.toastr.clear();
          this.stringifiedData = Array.of(response);
          this.orderStatus = this.stringifiedData[0].status;
          if(this.orderStatus == 'BOOKED'){
            this.val = 1;
          }
          if(this.orderStatus == 'DISPATCHED'){
            this.val = 2;
          }
          if(this.orderStatus == 'OUT'){
            this.val = 3;
          }
          if(this.orderStatus == 'DELIVERED'){
            this.val = 4;
          }
        },
        (error: HttpErrorResponse) => {
          this.toastr.clear();
          this.toastr.error(error.error.errorMessage, 'Error');
        }
      );
    }
    */
  }

  onSubmit(f : NgForm){
    /*

    this.trackingService.trackPackage(f.value['trackingId']).subscribe(
      (response: any) => {
        this.toastr.clear();
        this.stringifiedData = Array.of(response);
        this.orderStatus = this.stringifiedData[0].status;
        
        if(this.orderStatus == 'BOOKED'){
          this.val = 1;
        }
        if(this.orderStatus == 'DISPATCHED'){
          this.val = 2;
        }
        if(this.orderStatus == 'OUT'){
          this.val = 3;
        }
        if(this.orderStatus == 'DELIVERED'){
          this.val = 4;
        }
      },
      (error: HttpErrorResponse) => {
        this.toastr.clear();
        this.toastr.error(error.error.errorMessage, 'Error');
        this.stringifiedData = '';
      }
    );
    */
  }


 



}
