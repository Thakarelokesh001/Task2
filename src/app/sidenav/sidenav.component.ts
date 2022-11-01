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
    console.log(this.categories[1])
  //  console.log(this.categories[0])
    if(this.categories[0] === category){
      console.log("Display All")
      this.categorySelected = category
    }
    else if(this.categories[1] === category){
      console.log("Display Table")
      this.categorySelected = category
    }
    else if(this.categories[2] === category){
      console.log("Display Chair")
      this.categorySelected = category
    }
  }

}
