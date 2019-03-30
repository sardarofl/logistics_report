import { Component, OnInit,ElementRef} from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import {environment } from '../../../environments/environment'
import { SetdataService } from '../../services/setdata.service';

import * as Moment from "../../../../node_modules/moment/moment.js"
import { AdddataService } from '../../services/adddata.service';
import { DeletedataService } from '../../services/deletedata.service';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-be-logistic-add-data',
  templateUrl: './be-logistic-add-data.component.html',
  styleUrls: ['./be-logistic-add-data.component.css']
})
export class BeLogisticAddDataComponent implements OnInit {

  constructor(private getDataService:GetdataService, private elem:ElementRef, private snackbar:MatSnackBar, private setDataService:SetdataService, private addDataService:AdddataService, private deleteDataService:DeletedataService) { }

  supplies_array=[];

  supplier;
  invoiceno;
  invamount;
  currency;
  swift;
  supplierreadiness;
  legalization;
  pickup;
  shippingtype;
  shippingeta;
  shippingdep;
  bank;
  clearance;
  ntra;
  nationalsecurity;
  gatein;

  newShipmentData;

  ShowTick=false;

  ngOnInit() {
    // console.log(environment.server_url +'/fetchs/fetch_logistics')
    this.getData();

    let d = new Date();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    let hour = d.getHours();
    let mins = d.getMinutes();

    $.datetimepicker.setDateFormatter({
      parseDate: function (date, format) {
        var d = Moment(date, format);
      
            return d.isValid() ? d.toDate() : false;
        },
        
        formatDate: function (date, format) {
            return Moment(date).format(format);
        }
    })


    $('.date-inputs-start').datetimepicker({
      step:30,
      format: 'DD/MM/YYYY',
      timepicker:false,
      onSelectTime:(ct,$i)=>{


      }
  });

  }

  showTick(){
    this.ShowTick = true;
  }

  getData = () => {
    this.getDataService.getData(environment.server_url+ '/fetchs/fetch_logistics').subscribe((data) =>{
      this.supplies_array = [];
      for(let i=0; i<data.length; i++){
        
        this.supplies_array.push({
                                "id":" ",
                                "supplier":" ",
                                "invoiceno":" ", 
                                "invamount":" " , 
                                "currency":" " ,
                                "swift":" " , 
                                "supplierreadiness":" ",
                                "legalization":" ",
                                "pickup":" ",
                                "shippingtype":" ",
                                "shippingeta":" ",
                                "shippingdep":" ",
                                "bank":" ",
                                "clearance":" ",
                                "ntra":" ",
                                "nationalsecurity":" ",
                                "gatein":" "
                                })

                                // let shipping_dep_date = this.elem.nativeElement.querySelector('#shipping_dep_date'+i).value;
                                // let shipping_eta_date = this.elem.nativeElement.querySelector('#shipping_eta_date'+i).value;
                                // let gatein = this.elem.nativeElement.querySelector('#gatein'+i).value;
        this.supplies_array[i].id=data[i]._id
        this.supplies_array[i].supplier=data[i].supplier
        this.supplies_array[i].invoiceno=data[i].invoiceno
        this.supplies_array[i].invamount=data[i].invamount
        this.supplies_array[i].currency=data[i].currency
        this.supplies_array[i].swift=data[i].swift 
        this.supplies_array[i].supplierreadiness=data[i].supplierreadiness
        this.supplies_array[i].legalization=data[i].legalization
        this.supplies_array[i].pickup=data[i].pickup
        this.supplies_array[i].shippingtype=data[i].shippingtype
        this.supplies_array[i].shippingeta=data[i].shippingeta;
        this.supplies_array[i].shippingdep=data[i].shippingdep;
        this.supplies_array[i].bank=data[i].bank
        this.supplies_array[i].clearance=data[i].clearance
        this.supplies_array[i].ntra=data[i].ntra
        this.supplies_array[i].nationalsecurity=data[i].nationalsecurity
        this.supplies_array[i].gatein=data[i].gatein;
      }


    }, err=>{
      return false;
    })
  }



  updateAll () {
    var i = 0;
    for(i; i<this.supplies_array.length; i++){
      this.setData(this.supplies_array[i]);
    }
    this.getData();
    this.snackbar.open('Data Updated', 'OK', {
      duration: 3000
    });
  }

  deleteShipment (item){
    if(confirm ("Are you sure to delete shipment with invoice no. "+ item.invoiceno)){
      this.deleteDataService.deleteItem(environment.server_url+"/deletes/delete_shipment/", item.id).subscribe((res)=>{
 
        this.getData();
      },err=>{
        return false;
      })
    }
  
  }


  addData (){
    // console.log(this.shippingdep)
    let shipping_dep_date = this.elem.nativeElement.querySelector('#shipping_dep_date').value;
    let shipping_eta_date = this.elem.nativeElement.querySelector('#shipping_eta_date').value;
    let gatein = this.elem.nativeElement.querySelector('#gatein').value;
    
    this.newShipmentData = 
    {
      "supplier":this.supplier,
      "invoiceno":this.invoiceno, 
      "invamount":this.invamount , 
      "currency":this.currency ,
      "swift":this.swift , 
      "supplierreadiness":this.supplierreadiness,
      "legalization":this.legalization,
      "pickup":this.pickup,
      "shippingtype":this.shippingtype,
      "shippingeta":shipping_eta_date,
      "shippingdep":shipping_dep_date,
      "bank":this.bank,
      "clearance":this.clearance,
      "ntra":this.ntra,
      "nationalsecurity":this.nationalsecurity,
      "gatein":gatein
      };

      this.supplier="";
      this.invoiceno="";
      this.invamount="";
      this.currency="";
      this.swift="";
      this.supplierreadiness="";
      this.legalization="";
      this.pickup="";
      this.shippingtype="";
      this.shippingeta="";
      this.shippingdep="";
      this.bank="";
      this.clearance="";
      this.ntra="";
      this.nationalsecurity="";
      this.gatein="";

      this.addDataService.addData(environment.server_url+'/additems/add_shipment',this.newShipmentData).subscribe((res)=>{
        this.getData();
        this.snackbar.open('Data Added Successfully', 'OK', {
          duration: 3000
        });
      },err =>{
        this.snackbar.open(err,'OK',{
          duration:3000
        });
      })

  }

  setData(supply_data){
    
    this.setDataService.SetData(environment.server_url+'/sets/set_logisticdata',supply_data).subscribe((res)=>{
      this.ShowTick = false;
    })
  }

}
