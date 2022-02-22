import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: any;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { 
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      password: new FormControl('', Validators.required),
      address: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', [Validators.required]),
      
      
    });
  }
  ngOnInit(): void {
  }
  public selected:string='';

  selectChangeHandler(event: any) {
    this.selected = event.target.value;
  }


  submitData(){
    console.log("Check");
    let user = {
      username: this.registerForm.controls.username.value,
      password: btoa(this.registerForm.controls.password.value),
      address: this.registerForm.controls.address.value,
      email: this.registerForm.controls.email.value,
      mobile: this.registerForm.controls.mobile.value,
      role: this.selected,
     
    }
  
    console.log(user);

    
    
    
    this.userService.register(user).subscribe(
      (data)=>{
        console.log("data")
        Swal.fire('Success','user is registerd')
        this.router.navigate(['login'])
        //succes;
      },
      (error)=>{
        console.log('error')
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

