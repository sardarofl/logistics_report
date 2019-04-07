import { Component, OnInit } from '@angular/core';
import{GetdataService } from '../../services/getdata.service';
import {  VERSION } from '@angular/core';
import {environment } from '../../../environments/environment'
import * as Moment from "../../../../node_modules/moment/moment.js"


@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit {

  constructor(
    private getdataservice :GetdataService
  ) { }

  // alldata;
  alldata =[];
  total_usd;
  total_euro;
  ngOnInit() {
    this.loadData();

      setInterval(()=>{this.loadData() }, 10000);
  }

  loadData(){
    
    this.getdataservice.getCSVData(environment.server_url+'/fetchs/read_xls_file').subscribe( (data) =>{  
      this.total_usd =0;
      this.total_euro =0;
     
      //console.log(data)
      //this.alldata = data;
      this.alldata =[];

      for(let i=4; i<data[0].data.length; i++){
        if(data[0].data[i][0] == null)
        {
          break;
        }
        if(data[0].data[i][10] != null ){
        data[0].data[i][10] = Moment(this.ExcelDateToJSDate(data[0].data[i][10])).format('DD/MM/YYYY');
       }
   
       if(data[0].data[i][1] != null ){
        data[0].data[i][11] = Moment(this.ExcelDateToJSDate(data[0].data[i][11])).format('DD/MM/YYYY');
       }
   
       if(data[0].data[i][16] != null ){
         
        data[0].data[i][16] = Moment(this.ExcelDateToJSDate(data[0].data[i][16])).format('DD/MM/YYYY');
       }
       if(data[0].data[i][6] != 'Done'&& data[0].data[i][6] != 'Not Yet' && data[0].data[i][6] != 'Waiting Payment' && data[0].data[i][6] != null){
    
        data[0].data[i][6] = Moment(this.ExcelDateToJSDate(data[0].data[i][6])).format('DD/MM/YYYY');
      }
      if(data[0].data[i][8] != 'Done' && data[0].data[i][8] != 'Not Yet' && data[0].data[i][8] != 'Waiting Payment' && data[0].data[i][8] != null){
        console.log(data[0].data[i][8])

       data[0].data[i][8] = Moment(this.ExcelDateToJSDate(data[0].data[i][8])).format('DD/MM/YYYY');
     }
        data[0].data[i].background = "black"


        if((parseInt(Moment(data[0].data[i][11],'DD/MM/YYYY').format('X'))-(86400*3)) < parseInt(Moment(Date()).format('X')))
        {
          console.log("danger")
          data[0].data[i].background= "red"
        }
        if((parseInt(Moment(data[0].data[i][12],'DD/MM/YYYY').format('X'))) > parseInt(Moment(Date()).format('X')))
        {
          console.log("danger")
          data[0].data[i].background= "green"
        }
 
      }
      console.log(data[0])

     for(let i=4; i<data[0].data.length; i++){
     // console.log(data[0].data[i])
     if(data[0].data[i][0] == null)
     {
       break;
     }
    //  if(data[0].data[i][9] != null ){
    //  data[0].data[i][9] = Moment(this.ExcelDateToJSDate(data[0].data[i][9])).format('DD/MM/YYYY');
    // }

    // if(data[0].data[i][10] != null ){
    //  data[0].data[i][10] = Moment(this.ExcelDateToJSDate(data[0].data[i][10])).format('DD/MM/YYYY');
    // }

    // if(data[0].data[i][15] != null ){
      
    //  data[0].data[i][15] = Moment(this.ExcelDateToJSDate(data[0].data[i][15])).format('DD/MM/YYYY');
    // }


    // if(data[0].data[i][7] != 'Done' && data[0].data[i][7] != null){
    //   data[0].data[i][7] = Moment(this.ExcelDateToJSDate(data[0].data[i][7])).format('DD/MM/YYYY');
    // }
    //  if(data[0].data[i][])

      this.alldata.push(data[0].data[i]);
 
   
        if(data[0].data[i][4] == 'EUR')
        {
          this.total_euro = parseInt(data[0].data[i][3]) +this.total_euro;
        }
        if(data[0].data[i][4] == 'USD')
        {
          this.total_usd = parseInt(data[0].data[i][3])  +this.total_usd;
        }
      
        // console.log(this.alldata)
         // console.log(Moment(Date.parse(data[0].data[i][9]),'X').format('DD/MM/YYYY'));
        // // console.log(data[i].shippingeta)
        // // console.log("ETA: ",Moment(data[i].shippingeta,'DD/MM/YYYY').format('X'))
        // // console.log("Now: " ,Moment(Date()).format('X'))

        // this.alldata[i].background="black";
  
     }
     console.log(this.alldata)



    })
  }

   ExcelDateToJSDate(serial) {
    var utc_days  = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
 
    var fractional_day = serial - Math.floor(serial) + 0.0000001;
 
    var total_seconds = Math.floor(86400 * fractional_day);
 
    var seconds = total_seconds % 60;
 
    total_seconds -= seconds;
 
    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
 
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
 }

}

interface Alldata{
  _id:number,
  supplier:string,
  invoiceno:string,
  invamount:string,
  currency:string,
  swift:Date,
  supplierreadiness:string,
  legalization:string,
  pickup:Date,
  shippingtype:string,
  shippingdep:string,
  shippingeta:string,
  bank:string,
  clearance:string,
  ntra:string,
  nationalsecurity:string,
  gatein:string,
  background:string
}

