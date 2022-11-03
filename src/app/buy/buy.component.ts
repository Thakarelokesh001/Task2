import { Component, DoCheck, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/assets/data-interface';
import { BuyService } from '../buy.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements DoCheck {
buyArray:any=[]
lengthOfbuyArray:number=0
 totalAmount:number=0
 i:number=0
constructor(private buyService:BuyService,private router:Router){}

  ngDoCheck(){
    this.buyArray = this.buyService.buyData
    console.log(this.buyArray)
    this.lengthOfbuyArray = this.buyArray.length
     for(;this.i<this.buyArray.length;this.i++){
    this.totalAmount = this.totalAmount + this.buyArray[this.i].price
  
  }
}
goToHome(){
  this.router.navigate(['/'])
}

}
