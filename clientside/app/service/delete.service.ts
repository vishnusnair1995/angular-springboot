import { Injectable } from '@angular/core';
import {User} from 'src/app/component/form/User'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApiurlService }from 'src/app/service/apiurl.service'
@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient,private  urlservice:ApiurlService) { }
  user:User;
  id:any;
  userid:number;
  efxid:any;
  // useUrl="http://localhost:8089/delete";


  
deleteuser(userid,efxid)
{
  this.userid=userid;
  this.efxid=efxid;
//alert("inside delete user"+this.userid);
//alert("inside delete user service method"+userid);
return this.http.delete(this.urlservice.commonUrlMethod()+"delete" + "/"+userid+"/"+efxid,{ responseType: 'text' });

  
      

}
}