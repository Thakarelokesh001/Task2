import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private dataservice: DataService) {}
  categories = this.dataservice.categories;
  countVariable = this.categories.length;
  categorySelected:string=''
  ngOnInit(): void {
  
  }
  categoriesProduct(category:any)
  {
 for(let i=0;i<this.countVariable;i++){
  if(this.categories[i] === category){
    this.categorySelected = category
  }
 }
  }
}
