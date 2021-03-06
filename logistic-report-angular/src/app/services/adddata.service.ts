import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment } from '../../environments/environment'


import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpHeaders,HttpClient, HttpClientModule } from '../../../node_modules/@angular/common/http';
import {  } from '../../../node_modules/@types/selenium-webdriver/http';

@Injectable()
export class AdddataService {

  constructor(private http:HttpClient) { }

  sendCSV(formdata:any){
    let _url:string = environment.server_url+"/additems/xlsx_file_upload";
    return this.http.post(_url,formdata)
    .catch(this._errorHandler);
  }

  addData(url,data){
    return this.http.post(url,data)
    .catch(this._errorHandler);
  }


   _errorHandler(error: Response){
     console.error('Error occured: ' +error);
     return Observable.throw(error||'some error on server occured');
   }
}
