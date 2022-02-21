import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'service/booking.service'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public bookingForm: any;
  constructor(private bookingService:BookingService,private router:Router) {
    this.bookingForm = new FormGroup({
      s_from: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      r_to: new FormControl('', Validators.required),
      senderName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      senderMobile: new FormControl('', Validators.required),
      senderAdress: new FormControl('', [Validators.required]),
      receiverName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      receiverAddress: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    

      
      
    });
   }

  ngOnInit(): void {
  }

  submitData(){
    console.log("Check");
    let user = {
      s_from: this.bookingForm.controls.s_from.value,
      r_to: this.bookingForm.controls.r_to.value,
      senderName: this.bookingForm.controls.senderName.value,
      senderMobile: this.bookingForm.controls.senderMobile.value,
      senderAdress: this.bookingForm.controls.senderAdress.value,
      receiverName: this.bookingForm.controls.receiverName.value,
      receiverAddress: this.bookingForm.controls.receiverAddress.value,
      // contact: this.registerForm.controls.contact.value,
    }
    console.log(user);

    this.bookingService.booking(user).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire({
            icon: 'success',
            title: 'Your Item Succesfully Booked',
            text: 'Your Tracking Id is '+data.trackingID,
          
          }
         );
        // this.router.navigate(['griddata'])
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
