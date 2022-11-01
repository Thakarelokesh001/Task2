import { Component, DoCheck, OnInit, Output } from '@angular/core';
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
  saveBuyData:any=[]
  constructor(private dataservice:DataService,private router : Router,private buyService:BuyService) {
  }
  
  ngOnInit(){
      this.checkOutData = this.dataservice.checkOutData
      
      for(let i=0;i<this.checkOutData.length;i++){
        this.totalAmount = this.totalAmount + this.checkOutData[i].price
      }
      // console.log(this.checkOutData)
  }
 onSelected(arg:any){
  this.router.navigate(['/buy'])
  // console.log(arg)
  // console.log(this.buyArray)
  this.buyArray.push(arg)
  this.buyService.buyData = this.buyArray
  // console.log(this.buyService.buyData)
 }


}