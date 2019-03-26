import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataService {


  constructor(private http:Http){ 
    
   }
  // Getdata(){
  //   return this.http.get('http://192.168.1.155:3080/fetchs/read_xls_file');
  // }
    getCSVData(url){
      return this.http.get(url)
    }


}
