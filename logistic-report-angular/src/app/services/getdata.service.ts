import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataService {


  constructor(private http:Http){  }

    getCSVData(url){
      return this.http.get(url)
    }


}
