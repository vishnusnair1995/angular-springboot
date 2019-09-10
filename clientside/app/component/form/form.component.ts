import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

import { FetchService } from 'src/app/service/fetch.service';
import { InputService } from 'src/app/service/input.service';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/service/uploadfile.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { User } from 'src/app/component/form/User';
import { UpdateService } from 'src/app/service/update.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
declare var grecaptcha: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

   selectedFiles: FileList;
   validationerror:boolean=true;
   msgs: Message[] = [];
   edate:any;
pdate:any;

dateerror:boolean=false;
  currentFileUpload: File;
  courses:any[]
  results: any[];
  progress: { percentage: number } = { percentage: 0 };
  startingdate:Date;
endingdate:Date;
  registerForm: FormGroup;
  uploadedFiles: any[] = [];
  user:User;
status:boolean=false;
  
  // constructor(private formBuilder: FormBuilder,private inputservice:InputService,private uploadService: UploadFileService) { }
  constructor(private formBuilder: FormBuilder,private inputservice:InputService,private fetchservice:FetchService,private router:Router,private uploadService: UploadFileService,public updateservice:UpdateService){}
  ngOnInit()
   {
      this.registerForm = this.formBuilder.group({
            name: ['',Validators.required],
            email: ['', [Validators.required, Validators.email]],
            ustid: ['',Validators.required],
            efxid: ['',Validators.required],
            coursename: ['',Validators.required],
            pdate: ['',Validators.required],
            edate: ['',Validators.required],
            duration:['',Validators.required],
            phonenumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
           });
    }
   
  get f()
  { 
    return this.registerForm.controls; 
  }
  selectDate(event)
  {
    this.dateerror=false;
    //alert(this.pdate);
    this.edate=event.target.value;
 
    this.endingdate=new  Date(this.edate);
    this.pdate=this.registerForm.controls.pdate.value;
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
  search(event)
  {
    let query = event.query;
    this.updateservice.fetchUpdatedData().subscribe(
      data=>{
      this.results=data;
      
  
      });
  }
  show()
  {
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }
  showResponse(response)
  {
    console.log("haiiii");
  }
  
    onSubmit() 
    {
      this.registerForm.controls['name'].markAsTouched();
      this.registerForm.controls['email'].markAsTouched();
      this.registerForm.controls['efxid'].markAsTouched();
      this.registerForm.controls['ustid'].markAsTouched();
      this.registerForm.controls['coursename'].markAsTouched();
      this.registerForm.controls['pdate'].markAsTouched();
      this.registerForm.controls['edate'].markAsTouched();
      this.registerForm.controls['duration'].markAsTouched();
      this.registerForm.controls['phonenumber'].markAsTouched();
      if (this.registerForm.invalid) 
      {
         
          return;
      }
     
      this.msgs.push({severity:'info', summary:'Info Message', detail:'Your Form has beeen submitted'});
      console.log(this.registerForm);


          









      //this.uploadService.pushFileToStorage(file,this.f.efxid.value);
      this.inputservice.inputData(this.registerForm)
      .subscribe(()=> 
      {
        
      this.progress.percentage = 0;
     
if(this.selectedFiles)
{
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload,this.f.efxid.value,this.f.coursename.value,this.f.pdate.value,this.f.edate.value,this.f.duration.value).
    subscribe(event => {
      
           if (event.type === HttpEventType.UploadProgress)
            {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } 
           else if (event instanceof HttpResponse) 
           {
             
    
                console.log('File is completely uploaded!');
                
              // alert("your form has been submitted");
                this.router.navigateByUrl('/dashboard');
           }
  
  });
  this.selectedFiles = undefined;
}


else
{
  this.uploadService.pushDetails(this.f.efxid.value,this.f.coursename.value,this.f.pdate.value,this.f.edate.value,this.f.duration.value).
  subscribe(event=>{
    if (event.type === HttpEventType.UploadProgress)
    {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } 
  else if (event instanceof HttpResponse)
  {
    this.msgs.push({severity:'info', summary:'', detail:'Yor Form has Been Submitted'});
 // alert("your form has been submitted");
  this.router.navigateByUrl('/dashboard');
 }
});
}



});


this.status=true;


}

selectFile(event) 
{
  console.log("inside select");
  this.selectedFiles = event.target.files;
  
  console.log(this.selectedFiles);
}

}
