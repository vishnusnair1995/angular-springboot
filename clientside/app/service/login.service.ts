import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = '/http://localhost:8080/login';
st:any;
flag:any;
  constructor(private httpClient:HttpClient,private router:Router) { 
    
  }

//  validation(username,password) :any
// {
//   const headers =new HttpHeaders().set("Content-Type","application/json").set('username',username).set('password',password);
//   this.httpClient.get('http://localhost:8080/login',{headers}).subscribe((res:Response)=>{
     

//     const variable=res;
//     console.log(res);
   
//     if(res.status.toString().toLowerCase()==="true")
//     {
//       console.log(res.status);
//       this.st=res.status;
//       console.log("value1"+this.st);
//       localStorage.setItem('isLoggedIn', "true");
//       localStorage.setItem('token', username);
    
   
     
     
//     }
//     if(res.status.toString().toLowerCase()==="false")
//     {
//     // console.log("value is"+res.status);
//     this.router.navigateByUrl('/login');
  
//     }
//   });
//  console.log("value2 is"+this.st);
//  if(!this.st)
//  {
//    return true;
//  }
//  return false;
// }

validation(username,password) :any
{
  const headers =new HttpHeaders().set("Content-Type","application/json").set('username',username).set('password',password);
  return(this.httpClient.get('http://localhost:8089/login',{headers}));
}
}
