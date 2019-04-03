import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetdataService {


  constructor(private http:Http){ 
    
   }
  // Getdata(){
  //   return this.http.get('http://192.168.1.155:3080/fetchs/read_xls_file');
  // }
    getCSVData(url){
      return this.http.get(url)
      .map(res =>  res.json()) 
    }

    getData(url){
      return this.http.get(url)
      .map(res =>  res.json())   
    }

    getShipmentById(url, id){
      return this.http.get(url,id)
      .map(res =>  res.json())   
    }

}
