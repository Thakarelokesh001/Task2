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
  // isChecked:boolean = true
  @ViewChild("mycheckbox") mycheckbox:any=false;
  constructor(private dataservice:DataService,private router : Router,private buyService:BuyService) {
  }
  
  ngOnInit(){
      this.checkOutData = this.dataservice.checkOutData
      for(let i=0;i<this.checkOutData.length;i++){
        this.totalAmount = this.totalAmount + this.checkOutData[i].price
      }
  }
  
  isChecked(arg:any){
    if(this.mycheckbox.nativeElement.checked){
      this.buyActive=true
      this.mycheckbox.nativeElement.checked = true
      this.buyArray.push(arg)
      this.buyService.buyData =this.buyArray
      console.log('True Buy Service',this.buyService.buyData)
      console.log('True BuyArray',this.buyArray)
      console.log(this.mycheckbox.nativeElement.checked)
      
    }else if(!this.mycheckbox.nativeElement.checked){
      this.buyActive=false
      this.buyService.buyData=[]
      this.buyArray=[]
      console.log('Buy Array',this.buyArray)
      console.log('Buy Service',this.buyService.buyData)
      console.log('!',this.mycheckbox.nativeElement.checked)
    }
  }

 onSelected(){
  this.router.navigate(['/buy'])  
 }
}
