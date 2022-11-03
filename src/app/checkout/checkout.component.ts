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

  constructor(private dataservice:DataService,private router : Router,private buyService:BuyService) {
  }
  
  ngOnInit(){
      this.checkOutData = this.dataservice.checkOutData

      // if(this.isValueChecked){
      // this.buyArray.push(this.checkOutData)
      //   this.buyActive=true
      //     this.buyService.buyData =this.buyArray
      //     console.log(this.buyService.buyData)
      //     for(let data of this.buyService.buyData){
      //   for(;this.i<data.length;this.i++)
      //   {
      //     this.totalAmount = this.totalAmount + data[this.i].price
          
      //   }
      //   }}
  }

  isChecked(arg:any){
    if(this.isValueChecked){
      this.buyActive=true
        this.buyArray.push(arg)
        this.buyService.buyData =this.buyArray
      for(;this.i<this.buyService.buyData.length;this.i++)
      {
        this.totalAmount = this.totalAmount + this.buyService.buyData[this.i].price
      }
    }
    if(!this.isValueChecked){
      console.log(this.buyService.buyData)
      const id = arg.id
      const indexFin = this.buyService.buyData.findIndex((e:any)=>{
          if(e.id === id)
          {
            return id
          }
      })
      this.totalAmount = this.totalAmount - this.buyService.buyData[indexFin].price
      this.buyService.buyData.splice(indexFin,1)

    }
       
  }
  
 onSelected(){
  this.router.navigate(['/buy'])
 }
}
