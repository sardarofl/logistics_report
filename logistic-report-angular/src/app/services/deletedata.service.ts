import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeletedataService {

  constructor(private http:Http) { }

  deleteItem(url, id){
    return this.http.delete(url+id)
    .map(res => res.json());
  }


}
