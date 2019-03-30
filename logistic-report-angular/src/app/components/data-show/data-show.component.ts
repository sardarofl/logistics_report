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
  alldata:Alldata[];
  total_usd;
  total_euro;
  ngOnInit() {
    this.loadData();

      setInterval(()=>{this.loadData() }, 10000);
  }

  loadData(){
    
    this.getdataservice.getData(environment.server_url+'/fetchs/fetch_logistics').subscribe( (data) =>{  
      this.total_usd =0;
      this.total_euro =0;
     this.alldata = data

     for(let i=0; i<data.length; i++){


        if(data[i].currency == 'EUR')
        {
          this.total_euro = parseInt(data[i].invamount) +this.total_euro;
        }
        if(data[i].currency == 'USD')
        {
          this.total_usd = parseInt(data[i].invamount)  +this.total_usd;
        }
        // console.log(data[i].shippingeta)
        // console.log("ETA: ",Moment(data[i].shippingeta,'DD/MM/YYYY').format('X'))
        // console.log("Now: " ,Moment(Date()).format('X'))

        this.alldata[i].background="black";
        if((parseInt(Moment(data[i].shippingeta,'DD/MM/YYYY').format('X'))-(86400*3)) < parseInt(Moment(Date()).format('X')))
        {
          // console.log("danger")
          this.alldata[i].background= "red"
        }
        if((parseInt(Moment(data[i].shippingdep,'DD/MM/YYYY').format('X'))) > parseInt(Moment(Date()).format('X')))
        {
          // console.log("danger")
          this.alldata[i].background= "green"
        }
 
     }



    })
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

