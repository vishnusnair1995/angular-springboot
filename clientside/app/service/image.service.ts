import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApiurlService }from 'src/app/service/apiurl.service'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
efxid:any;
File:any;
coursename:any
imageurl:any='http://localhost:8080/Image/';
  constructor(private httpClient:HttpClient,private  urlservice:ApiurlService) { 
  this.imageurl=this.imageurl;
  }

  // imagefetch(efxid:any):Observable<any>
  // {
  //   console.log("inside service");
  //   this.efxid=efxid;
    
  //  return  this.httpClient.get('http://localhost:8080/Image/'+efxid);
  //   // return this.httpClient.get(this.imageurl+this.efxid, { responseType: 'blob' });

  // }
  imagefetch(efxid:any,coursename:any):Observable<any>
  {
    console.log("inside service");
    this.efxid=efxid;
    this.coursename=coursename;
    
   return  this.httpClient.get(this.urlservice.commonUrlMethod()+'Image/'+efxid+'/'+coursename);
    // return this.httpClient.get(this.imageurl+this.efxid, { responseType: 'blob' });

  }
}