import { Injectable } from '@angular/core';
import { User } from 'src/app/component/form/User';
// import { HttpClient } from '@angular/common/http/http';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  user:User;
  file:File;
  efxid:any;
  data:any;
id:any;
  constructor(private http:HttpClient) { }
  updateRecord(certificateid:any,efxid:any,file: File,data:any) :Observable<HttpEvent<{}>> {
  console.log("inside update");
  this.id=certificateid;
    this.efxid=efxid;
    this.file=file;
    console.log(this.file.name);
   
    console.log(data.value);
    this.user=data.value;
    
    
    // return(this.httpClient.get('http://localhost:8089/update'));
    // return this.httpClient.post<User>('http://localhost:8089/update', user)
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('id',this.id)
    formdata.append('efxid', this.efxid);
    
    formdata.append('coursename', this.user.coursename);
    formdata.append('pdate', this.user.pdate);
    formdata.append('edate',this.user.edate)
    formdata.append('duration',this.user.duration);
    console.log("formdata is"+formdata.forEach);
    const req = new HttpRequest('POST', 'http://localhost:8089/update', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    
    );
  //  console.log(this.name);
    return this.http.request(req);

  }
  fetchUpdatedData() 
  {

    
    // return this.http.get<any>('http://localhost:8089/fetchcourse')
    //             .toPromise()
    //             .then(res => <any[]> res.json.data)
    //             .then(data => { return data; });
                
return(this.http.get<any[]>('http://localhost:8089/fetchcourse'));
  }
}
    
  





