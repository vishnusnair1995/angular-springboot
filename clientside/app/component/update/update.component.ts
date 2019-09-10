import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/component/form/User';
import { UpdateService } from 'src/app/service/update.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import {SelectItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import {MenuItem} from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  items1: MenuItem[];
  durations: SelectItem[];
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  updateForm: FormGroup;
edate:any;
pdate:any;
dateerror:boolean=false;
startingdate:Date;
endingdate:Date;
differencedate:any;
  uploadedFiles: any[] = [];
certificateid:any;
updatedstatus:boolean=false;
text: string;
courses:any[]
results: any[];
uniqueresults:any[];
user: User = 
{
  id:'',
  name: '',
  email: '',
  ustid: '',
  efxid: '',
  coursename: '',
  pdate: '',
  edate: '',
  duration: '',
  phonenumber: '',
  noOfRecords:0
 };
  constructor(private formBuilder: FormBuilder,public updateservice:UpdateService,public router:Router) {
  //   this.durations = [
  //     {label:'Select City', value:null},
  //     {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
  //     {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
  //     {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
  //     {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
  //     {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  // ];
  this.durations = [
    {label:'Choose Duration', value:null},
    {label:'Less than 1 week', value:1},
    {label:'1-2 week', value:2},
    {label:'3-4 week', value:3},
    {label:'more than 1 month', value:3
  }
   
];
   }

  ngOnInit() {
    this.certificateid=localStorage.getItem('certificateid')
    this.user.efxid=localStorage.getItem('efxid')
    console.log(this.certificateid);
    this.updateForm = this.formBuilder.group({
      efxid: [''],
      coursename: ['',Validators.required],
      pdate: ['',Validators.required],
      edate: ['',Validators.required],
      duration:['',Validators.required],
      fileinput:['',Validators.required]
   
     });
   
  }
  get f()
  { 
    return this.updateForm.controls; 
  }
  
  onUpdate()
  {
   
    this.updateForm.controls['coursename'].markAsTouched();
    this.updateForm.controls['pdate'].markAsTouched();
    this.updateForm.controls['edate'].markAsTouched();
    this.updateForm.controls['duration'].markAsTouched();
    this.updateForm.controls['fileinput'].markAsTouched();

    if (this.updateForm.invalid) 
      {
        alert("invalids");
         
          return;
      }
 
  this.updatedstatus=true;
    this.user.id=this.certificateid;
  //   alert("certificate id is "+this.user.id);
  //  alert("updateed value is"+this.user.efxid);
  //  alert("updated value is "+this.user.coursename);
  console.log(this.updateForm.value);
  // this.updateservice.updateRecord(this.certificateid,this.user,this.user.coursename);
  this.progress.percentage = 0;
  
  this.currentFileUpload = this.selectedFiles.item(0);
  // alert("updated fileeeee"+this.currentFileUpload.name);
  this.updateservice.updateRecord(this.certificateid,this.user.efxid,this.currentFileUpload,this.updateForm).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {

      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      this.updatedstatus=true;
      // console.log('File is completely uploaded!');
      alert("certificate details updated");
  

    }
  });
  this.selectedFiles = undefined;
  
 
  this.router.navigateByUrl('/dashboard');
  
  }
 

  selectDate(event)
  {
    this.dateerror=false;
    //alert(this.pdate);
    this.edate=event.target.value;
 
    this.endingdate=new  Date(this.edate);
    this.pdate=this.updateForm.controls.pdate.value;
    this.startingdate = new Date( this.pdate);
    var msDateA = Date.UTC(this.endingdate.getFullYear(), this.endingdate.getMonth()+1, this.endingdate.getDate());
    var msDateB = Date.UTC(this.startingdate.getFullYear(), this.startingdate.getMonth()+1, this.startingdate.getDate());
    if (msDateA<msDateB)
    {
     this.dateerror=true;

    }
 
    
  //   alert(this.edate);
  //  alert( this.updateForm.controls.pdate.value);
  }
  selectFile(event) 
  {
    console.log("inside select");
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }




//     search(event) {
//       let query = event.query;
//       this.updateservice.fetchUpdatedData().then(courses=> {
//         this.results= this.filterCourses(query, courses);
//         console.log(this.results);
//     });
// }
search(event)
{
  let query = event.query;
  this.updateservice.fetchUpdatedData().subscribe(
    data=>{
      this.results=this.filterCourses(query, data);
    

    });
}

filterCourses(query, countries: any[]):any[] {
  //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
  let filtered : any[] = [];
  for(let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if(country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(country);
      }
  }
  return filtered;
}

}
