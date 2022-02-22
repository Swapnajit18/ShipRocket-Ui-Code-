import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginuserService } from 'service/loginuser.service';
import Swal from 'sweetalert2';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user1:User =new User();
 

  constructor( private loginuserservice:LoginuserService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user1);
    this.user1.password = btoa(this.user1.password),
    this.loginuserservice.loginUser(this.user1).subscribe(
      (data)=>{
        console.log(data)

        this.router.navigate(['../griddata'], {
          queryParams: {
            //isEdit: true,
            role: data.role,
            username:data.username,
          },
          relativeTo: this.route,
        });

       
        Swal.fire('Success','Logged in')
       
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
   
   
   


   
  }
 

}
