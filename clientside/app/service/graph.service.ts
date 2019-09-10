import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/component/form/User';
import {ApiurlService }from 'src/app/service/apiurl.service'
@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http:HttpClient,private  urlservice:ApiurlService ) { }

  fetchGraphValues()
  {
    // return(this.http.get< User []>("http://localhost:8089/fetching"))
      // return(this.http.get< String []>("http://localhost:8089/fetchcgraph"))
    return(this.http.get< String []>(this.urlservice.commonUrlMethod()+"fetchcgraph"))
  }
  fetchGraphValuesRecords()
  {
    return(this.http.get<Number []>(this.urlservice.commonUrlMethod()+"fetchcRecordsNumber"))
  }
  fetchRecordsNumber()
  {
    return(this.http.get<any []>(this.urlservice.commonUrlMethod()+"fetchdate"));
  } 
  }
  

