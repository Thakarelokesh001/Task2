import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/assets/data-interface';

@Injectable()
export class DataService {
  categories = ['All Categories', 'Table', 'Chair'];
  private _checkOutData:Data[]=[]
  constructor(private http: HttpClient) {
  }
  // https://stackoverflow.com/questions/47206924/angular-5-service-to-read-local-json-file
public getData():Observable<Data[]>{
  return this.http.get<Data[]>('assets/data.json')
  
}
  set checkOutData(arg){
     this._checkOutData = arg
    // console.log(this._checkOutData)
  }

  get checkOutData(){
    return this._checkOutData
  }
}
