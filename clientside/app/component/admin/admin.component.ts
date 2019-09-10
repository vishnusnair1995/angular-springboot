
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginRequest} from "src/app/component/admin/LoginRequest"
import {UserService} from 'src/app/service/user.service'
declare var grecaptcha: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [UserService],
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  captchaError: boolean = false;
  loginResponse: string;
 
  login:LoginRequest= {
   
    email: "",
    password:"",
    recaptchaResponse:""

  };
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
      this.captchaError = true;
      return;
    }

    this.login.email = this.loginForm.controls.email.value;
    this.login.password = this.loginForm.controls.password.value;
    this.login.recaptchaResponse = response;
    this.userService.login(this.login).subscribe(data => {
      // if(data.status === 200) {
      //   //locally store the token
      //   this.router.navigate(['list-user']);
      // } else {
      //   this.invalidLogin = true;
      //   this.loginResponse = data.message;
      // }
      console.log(data);
      grecaptcha.reset();
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}