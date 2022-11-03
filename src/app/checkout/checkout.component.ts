import { Component, DoCheck, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/assets/data-interface';
import { BuyService } from '../buy.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  checkOutData:Data[]=[]
  totalAmount:number = 0
  buyArray:any=[]
  buyActive:Boolean=true
  checkedData:any=[]
  isValueChecked:boolean = true
  uniqueIds:any=[]
  i:number=0
  j:number=0
  parentSelector:Boolean=false

  constructor(private dataservice:DataService,private router : Router,private buyService:BuyService) {
  }
  
  ngOnInit(){
      this.checkOutData = this.dataservice.checkOutData

  //  this.isValueChecked=true
  // if(this.isValueChecked){
  //     for(;this.i<this.checkOutData.length;this.i++)
  //     {
  //       this.totalAmount = this.totalAmount + this.checkOutData[this.i].price
  //     }}
  }
  isChecked(arg:any){
    console.log(this.i)
    if(this.isValueChecked){
      this.buyActive=true
        this.buyArray.push(arg)
       console.log(this.buyArray)
       
      for(;this.i<this.buyArray.length;this.i++)
      {
        this.totalAmount = this.totalAmount + this.buyArray[this.i].price
      }
      console.log(this.i)
      this.buyService.buyData =this.buyArray 
    }
    if(!this.isValueChecked){
      this.i=0
      const id = arg.id
      const indexFin = this.buyArray.findIndex((e:any)=>{
          if(e.id === id)
          {
            return id;
          }
      })
      if(indexFin !=-1){
        this.totalAmount = this.totalAmount - this.buyService.buyData[indexFin].price
        console.log('Unchecked',indexFin)
        // if(this.totalAmount < 0){
        //   this.totalAmount = 0
        // }
        
      }
      this.buyArray.splice(indexFin,1)
      this.buyService.buyData = this.buyArray
      console.log(this.buyService.buyData)
    }
  }
  
 onSelected(){
  this.router.navigate(['/buy'])
 }

}
