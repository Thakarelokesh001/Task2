import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
private _buyData:any=[]

  constructor() { }

  set buyData(arg){
    this._buyData = arg
   console.log(this._buyData)
 }

 get buyData(){
   return this._buyData
 }
}
