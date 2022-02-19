import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'service/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss']
})
export class AddStatusComponent implements OnInit {

  bookingId: any;
  comments:any;
  codeArray: any;

public statusForm:any;
  constructor(public dialogbox:MatDialogRef<AddStatusComponent>,private route:ActivatedRoute,private bookingService:BookingService) {

    this.statusForm = new FormGroup({
      status: new FormControl('', [Validators.required]),
      
      
    });
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.bookingId = params['bookingId'];
      this.comments=params['comments'];
      //this.codeArray = params['code'];
     
    });
  
  }

  public selected:string='';

  selectChangeHandler(event: any) {
    this.selected = event.target.value;
  }

  onClose(){
    this.dialogbox.close();

  }

  submitData(){
    console.log("Check");
    let user = {
      bookingId: this.bookingId,
      comments: this.comments,
      status: this.selected,
      // contact: this.registerForm.controls.contact.value,
    }
   //console.log(this.bookingId)
   //console.log(this.comments)
   //console.log(this.selected)
   console.log(user)

   this.bookingService.update(user).subscribe(
    (data:any)=>{
      console.log(data)
      Swal.fire({
          icon: 'success',
          title: 'Updated Succesfully',
          text:'Your changes will be reflected in next login',
        
        }
       );
      //succes;
    },
    (error)=>{
      console.log(error)
       Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
      //error
    }
  )

  this.dialogbox.close();

}


}
