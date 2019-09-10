import { Component, OnInit } from '@angular/core';
import {Login} from  'src/app/component/login/Login';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import {LoginService} from 'src/app/service/login.service';
import { AuthService } from 'src/app/service/auth.service'
declare var grecaptcha: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:Login= {
    username:"",
    password:"",
   

  };
  userid:string;
  // status:boolean;
  validationSatisfied:boolean=true;


  constructor(private router: Router,public authService: AuthService,private route: ActivatedRoute,private loginservice:LoginService) {}

   





  ngOnInit() {
  this.authService.logout();
  }
  // submit()
  // {
   

  // this.validationSatisfied = this.loginservice.validation(this.login.username,this.login.password);
  // console.log("this.validationSatisfied"+ this.validationSatisfied);
  // if(this.validationSatisfied)
  // {
  //   this.router.navigateByUrl('/dashboard');
  // }
  // if(! this.validationSatisfied)
  // {
  //   this.login.username = '';
  //   this.login.password = '';

  // }
  // }
  dash()
  {
    this.router.navigateByUrl('/dashboard');
  }
  submit()
  {
 
 
  this.loginservice.validation(this.login.username,this.login.password).subscribe(data => 
    {
       localStorage.setItem('isLoggedIn', "false");
     
     
       console.log(data.status);
        console.log(data.Message);
       if(data.Message=="Successfully login")
       {
        localStorage.setItem('isLoggedIn', "true");
      
         this.validationSatisfied=true;
       
        this.router.navigateByUrl('/dashboard');
       }
    else if(data.Message=="incorrect password")
    {
      this.validationSatisfied=false;
      this.login.username = '';
      this.login.password = '';

    }
    
 });
 
}
}

