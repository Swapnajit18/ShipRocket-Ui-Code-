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
 
/*
  loginData={
    username:'',
    password:'',
  };
  */
  constructor( private loginuserservice:LoginuserService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user1);
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
       // this.router.navigate(['griddata'])
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
   
   
   


   



    /*

    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username required!!!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password required!!!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
      return;
    }
    /** 
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("Success");
        console.log("data");

        //Login ...

        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user)

            //redirect...Admin
            //redirect ..User
          }
        );
      },
      (error)=>{
        console.log("Failed");
        console.log("error");
        
      }
    );

*/
  }
 

}
