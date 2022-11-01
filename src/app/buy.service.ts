import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
private _buyData:any=[]

  constructor() { }

  set buyData(arg){
    this._buyData = arg
 }

 get buyData(){
   return this._buyData
 }
}
