import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  name:any;
  efxid:any;
  coursename:any;
  pdate:any;
  edate:any;
  duration:any;
  id:any;
  file:File=null;
  constructor(private http: HttpClient) {}
 
  pushFileToStorage(file: File,efxid:any,coursename:any,pdate:any,edate:any,duration:any): Observable<HttpEvent<{}>> {
    this.efxid=efxid;
    this.coursename=coursename;
    this.pdate=pdate;
    this.edate=edate;
    this.duration=duration;
   // console.log("filename issss"+file.name);
    //  this.name = localStorage.getItem('efxid');
    // console.log("id inside upload service is" +this.userdata);
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('efxid', this.efxid);
    formdata.append('coursename',this.coursename);
    formdata.append('pdate',this.pdate);
    formdata.append('edate',this.edate);
    formdata.append('duration',this.duration);
    console.log("formdata is"+formdata.forEach);
    const req = new HttpRequest('POST', 'http://localhost:8089/api/file/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    
    );
   console.log(this.name);
    return this.http.request(req);

  }
  pushDetails(efxid:any,coursename:any,pdate:any,edate:any,duration:any)
  {
    alert("pushdetails");
    
    this.efxid=efxid;
    this.coursename=coursename;
    this.pdate=pdate;
    this.edate=edate;
    this.duration=duration;
    const formdata: FormData = new FormData();
    
    formdata.append('efxid', this.efxid);
    formdata.append('coursename',this.coursename);
    formdata.append('pdate',this.pdate);
    formdata.append('edate',this.edate);
    formdata.append('duration',this.duration);
    console.log("formdata is"+formdata.forEach);
    const req = new HttpRequest('POST', 'http://localhost:8089/api/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    
    );
   console.log(this.name);
    return this.http.request(req);

  }
    

  }
