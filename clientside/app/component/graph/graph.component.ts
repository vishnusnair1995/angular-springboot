import { Component, OnInit } from '@angular/core';
import { GraphService } from 'src/app/service/graph.service';
import { User } from 'src/app/component/form/User';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent  implements OnInit {
 
i:number=0;
  data: any;
  data1:any;
  dataArray:Number[];
  recordNumber:Number[];
  

 // public name:String[]
  public graphArray:String[];
// public nameArray:any = [];
public nameArray:String[];
 public noOfRecordArray:any=[];
 

    constructor(private graphservice:GraphService) {}
    ngOnInit() {
     this.graphFetch();
     this.pieGraph();


    }
    graphFetch()
    {
      this.dataArray=[];
      this.graphArray=["",""];
         this.graphservice.fetchGraphValues().subscribe(
          data=>{
     
          this.graphArray=data;
          console.log("array is"+this.graphArray);




          this.graphservice.fetchGraphValuesRecords().subscribe(
            data=>{
            this.dataArray=data;
          
    //       // for (let entry of  this.graphArray ) {
   
    //       //   // console.log(entry.name);
    //       //   this.nameArray.push(entry.name);
    //       //   this.noOfRecordArray.push(entry.noOfRecords);
         
    //       // }
          this.data =
          {
              labels: this.graphArray,
              datasets: 
                [
                {
                  label: 'No of Certificates ',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data:this.dataArray
                }
            
            ]
          } 
     
    
         
          });
        });
        
          console.log("\narray is"+this.graphArray);
          this.data =
          {
              labels: this.graphArray,
              datasets: 
                [
                {
                  label: 'My First dataset',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data:this.dataArray
                }
            
            ]
        }
        }


        pieGraph()
        {
           this.recordNumber=[];
           this.graphservice.fetchRecordsNumber().subscribe(
             data=>{
       
             this.recordNumber=data;
             console.log(this.recordNumber);

            

        this.data1= {
           //  labels: ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'],
            labels: ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMPER','OCTOBER','NOVEMBER',"DECEMBER"],
            datasets: [
                {
                    data:  [this.recordNumber["JANUARY"],this.recordNumber["FEBRUARY"],this.recordNumber["MARCH"],
                    this.recordNumber["APRIL"],this.recordNumber["MAY"],this.recordNumber["JUNE"],this.recordNumber["JULY"],
                    this.recordNumber["AUGUST"],this.recordNumber["SEPTEMBER"],this.recordNumber["OCTOBER"],this.recordNumber["NOVEMBER"],
                    this.recordNumber["DECEMBER"] ],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FFFE54",
                       " 4#6B2EB",
                      " #36A2CB",
                      "#ff0080",
                      "#ff0000",
                      "#00ff80",
                      " #660000"
                      
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
    
           });
          this.data1 = {
            // labels: ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'],
            labels: ['JANUARY','MARCH'],
            datasets: [
                {
                    data:   [this.recordNumber["JANUARY"],this.recordNumber["FEBRUARY"],this.recordNumber["MARCH"],
                    this.recordNumber["APRIL"],this.recordNumber["MAY"],this.recordNumber["JUNE"],this.recordNumber["JULY"],
                    this.recordNumber["AUGUST"],this.recordNumber["SEPTEMBER"],this.recordNumber["OCTOBER"],this.recordNumber["NOVEMBER"],
                    this.recordNumber["DECEMBER"] ],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };

        }
      }
      