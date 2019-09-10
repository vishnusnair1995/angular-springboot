import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { User } from '../form/User';
import { ImageService} from 'src/app/service/image.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DeleteService } from 'src/app/service/delete.service';
import { UpdateService } from 'src/app/service/update.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {ConfirmationService, Message} from 'primeng/api'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ConfirmationService],
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  msgs: Message[] = [];
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  updateForm: FormGroup;
i:number=0
  uploadedFiles: any[] = [];
  efxid:any;
  userid:any;
  id:any;
  ids:any;
  usermodel: User[];
  userdata:User[];
  coursename:any;
  display: boolean = false;
  available:boolean=false;
  certificateid:any;

  images:any[];
  cols:any[];
  noOfRecords:any;
  k:number;

  constructor(private formBuilder: FormBuilder,public fetchservice: FetchService,public imageservice:ImageService,private router:Router,public authService: AuthService,public deleteservice: DeleteService,public updateservice:UpdateService,private confirmationService: ConfirmationService)
  {
    
   
  }
   
  ngOnInit() 
  {
    
  
    this.i=0;
   
      this.fetchData();
    
     
    this.id = localStorage.getItem('isLoggedIn');
    console.log("value is"+this.id);
    this.fetchdetails(this.efxid);
    
    this.cols = [
      { field: 'name', header: 'NAME' },
      { field: 'efxid', header: 'EQUIFAXID' },
      { field: 'phonenumber', header: 'PHONENUMBER' },
      { field: 'email', header: 'EQUIFAX MAIL' },
      { field: 'noOfRecords', header: 'NO OF CERTIFICATES' }
  ];
  this.updateForm = this.formBuilder.group({
    efxid: ['',],
    coursename: [''],
    pdate: [''],
    edate: ['',],
    duration:['',],
  
   });
  
  }
 


  doSomething()
  {
    this.i=this.i+1
   console.log(this.i);
    return this.i;
  }

  
  fetchData()
    {
      
        this.fetchservice.fetchdata().subscribe(data => {
          this.usermodel = data;
          
          
          
          console.log("inside fetchdata"+this.usermodel);
        //  console.log(this.usermodel[0].noOfRecords);
           
          
  
         });
        
     
   
    
   

      
      
     
    }
dashboard()
{
  this.router.navigateByUrl('/graph');  
}
   
    fetchdetails(efxid:any)
    {
      this.efxid=efxid;
    console.log("testing");
    this.fetchservice.fetchdetails(efxid).
    subscribe(data => {
        this.userdata = data;
        // console.log(this.userdata[0].id)
        // this.certificateid=this.userdata[0].id;
        // console.log(this.certificateid);
     });
     

    }
    login()
  {
  this.router.navigateByUrl('/login');
  }
  showCertificate(efxid:any,coursename:any)
  {
 
    this.efxid=efxid;
    this.coursename=coursename;
    console.log(event);
    console.log(this.efxid+this.coursename)
    this.imageservice.imagefetch(this.efxid,this.coursename).subscribe(data => 
           {
               this.available=false;
               this.images = data;
          console.log(this.images.length);
          console.log(data);
             if(data[0].pic!=null)
             {
                this.available=true;
           
             }
        
          
         console.log("iddddddddddddddddd"+JSON.stringify(data[0].id));
           
        console.log(this.available);
        console.log(this.images);
        });
        
        
        this.display = true; 
     
    }
            selectFile(event) 
{
  console.log("inside select");
  this.selectedFiles = event.target.files;
  console.log(this.selectedFiles);
}
get f()
{ 
  return this.updateForm.controls; 
}
    
  

  incrementValue(){
    
  }

    logout(): void {
      console.log("Logout");
      this.authService.logout();
      this.router.navigate(['/login']);
    }
    delete(id:any,efxid:any) 
              {
                
                this.confirmationService.confirm({
                  message: 'Are you sure that you want to perform this action?',
                  header: 'Confirmation',
                  icon: 'pi pi-exclamation-triangle',
                  accept: () => {
                                           this.userid = id;
                                          this.efxid=efxid;
                                                //alert(user.id);
                                              //this.router.navigate(['login', { id: user.id }]);
                                          this.deleteservice.deleteuser(this.userid,this.efxid).subscribe( ()=> {
                                            this.ngOnInit();
                                        // alert('User deleted successfully');
                                        
                                           });
                                          
                                       
                   this.msgs = [{severity:'info', summary:'', detail:'You have rejected the operation'}];    
                      //Actual logic to perform a confirmation
                  },
                  
            reject: () => {
              this.ngOnInit();
                this.msgs = [{severity:'info', summary:'', detail:'You have rejected the operation'}];
            }
                });
              }
          







               
              
              add()
              {
                this.router.navigateByUrl('/form');
              }



          updateCertificate(id:any,efxid:any) 
          {
            this.certificateid=id;
            this.efxid=efxid;
            localStorage.setItem("certificateid",this.certificateid);
            localStorage.setItem("efxid",this.efxid);

            this.router.navigateByUrl('/update')

          }   
          

    }