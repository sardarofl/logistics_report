import { Component, OnInit } from '@angular/core';
import{GetdataService } from '../../services/getdata.service';
import {  VERSION } from '@angular/core';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit {

  constructor(
    private getdataservice :GetdataService
  ) { }

  row;
  total_usd;
  total_euro;
  row_altered=[];
  ngOnInit() {
    this.total_usd =0;
    this.total_euro =0;
    this.getdataservice.getCSVData('http://192.168.1.155:3080/fetchs/read_xls_file').subscribe( (dataFromServer:any) =>{  
     let bodyJson =JSON.parse(dataFromServer._body )
    
     this.row = bodyJson[0].data
     console.log( this.row);

     for(let i=4; i<=this.row.length; i++){
      //  console.log(this.row[i][0])
      if(this.row[i][0] == null){
        break;
      }else{
        this.row_altered.push(this.row[i])
       // console.log(bodyJson[0].data[i][2])
        if(bodyJson[0].data[i][3] == 'USD')
        {
          this.total_euro = bodyJson[0].data[i][2] +this.total_euro;
        }
        if(bodyJson[0].data[i][3] == 'EUR')
        {
          this.total_usd = bodyJson[0].data[i][2] +this.total_usd;
        }
        
       
      }

      // for(let i=4; i<=this.row.length; i++){
      //   if(this.row[i][])
      // }

   

     }
     console.log(this.total_euro);
     console.log(this.total_usd);
   //  console.log(this.total);
   
    //  if (this.value){
    //  }
    //  for(let i=5;i>15;i++){
    //   console.log(bodyJson[i].data[i]);
    // }
    
    })
  }
 // version = VERSION.full;
  
  //formatsDateTest: string[] = [
    //'dd/MM/yyyy',
    //'dd/MM/yyyy hh:mm:ss',
    //'dd-MM-yyyy',
    //'dd-MM-yyyy HH:mm:ss',
    //'MM/dd/yyyy',
    //'MM/dd/yyyy hh:mm:ss',
    //'yyyy/MM/dd',
    //'yyyy/MM/dd HH:mm:ss',
    //'dd/MM/yy',
    //'dd/MM/yy hh:mm:ss',
    //];
  
  // dateNow : Date = new Date();
  // dateNowISO = this.dateNow.toISOString();
  // dateNowMilliseconds = this.dateNow.getTime();
}
