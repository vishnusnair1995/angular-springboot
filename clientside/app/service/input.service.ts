import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/component/form/User';


@Injectable({
  providedIn: 'root'
})
export class InputService
 {
   efxid:String;
  user:User;
  flag:any;
  constructor(private httpClient:HttpClient) {}
  private userUrl = 'http://localhost:8089/add-users';
  inputData(data:any)
     {
    this.user=data.value;
    console.log("efxid       is"+this.user.efxid);
    localStorage.setItem('efxid',this.user.efxid );
    this.flag=true;
    return this.httpClient.post<User>(this.userUrl, this.user);
  }
}
  
      
  
  
  
  
   
  
  
  



