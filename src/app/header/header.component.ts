import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
checkoutActive:boolean=false
lengthData : number = 0
  constructor(private router:Router,private dataService : DataService) { }

ngDoCheck(){
  if(this.dataService.checkOutData.length >= 1){
    this.checkoutActive = true
  }else{
    this.checkoutActive = false
  }
  this.lengthData = this.dataService.checkOutData.length
}
  checkout(){
    this.router.navigate(['/cart'])
  }
}
