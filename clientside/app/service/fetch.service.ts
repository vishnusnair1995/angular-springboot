import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/component/form/User';
import { Observable} from 'rxjs';
import {ApiurlService }from 'src/app/service/apiurl.service'
@Injectable({
  providedIn: 'root'
})
export class FetchService {
event:any;
  constructor(private httpClient:HttpClient,private router:Router,private  urlservice:ApiurlService) { }
  // fetchdata():Observable<User[]> 
  // {
    
  // // let headers =new HttpHeaders().set("Content-Type","application/json").set('Cache-Control','no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
  // // .set('Pragma','no-cache').set('Expires','0');
  // return this.httpClient.get<User[]>('http://localhost:8089/fetching');
  // // ,{headers});
   
  // }


  fetchdata()
  {
    return this.httpClient.get<User[]>(this.urlservice.commonUrlMethod()+"fetching");
  }
  fetchdetails(efxid:any)
  {
    return this.httpClient.get<User[]>(this.urlservice.commonUrlMethod()+"fetchcertificate/"+efxid);

  }

  fetchUpdatedData(event:any)
  {
    alert("hai");
    this.event=event;
    console.log(this.event)

  }
}
