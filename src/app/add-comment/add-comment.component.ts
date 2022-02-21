import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'service/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  bookingId: any;
  status: any;
  codeArray: any;
 public commentsForm: any;

  constructor(public dialogbox:MatDialogRef<AddCommentComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private route:ActivatedRoute,private bookingService:BookingService) {
    this.commentsForm = new FormGroup({
      comments: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      
      
    });
   }

  ngOnInit(): void {

    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    //   this.bookingId = params['bookingId'];
    //   this.status=params['status'];
  
    //   //this.codeArray = params['code'];
     
    // });
    this.bookingId = this.data.bookingId;
     this.status=this.data.status;
  }

  onClose(){
    this.dialogbox.close();

  }

  submitData(){
    console.log("Check");
    let user = {
      bookingId: this.bookingId,
      status: this.status,
      comments: this.commentsForm.controls.comments.value,
      // contact: this.registerForm.controls.contact.value,
    }
   //console.log(this.bookingId)
   //console.log(this.comments)
   //console.log(this.selected)
   console.log(user)

   this.bookingService.update(user).subscribe(
    (data:any)=>{
      //console.log(data)
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
