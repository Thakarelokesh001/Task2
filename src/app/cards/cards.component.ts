import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from '../data.service';
import { Data } from 'src/assets/data-interface';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
data:Data[]=[]
checkOutData:Data[]=[]
  constructor(private dataservice:DataService,private http:HttpClient) { }
@Input() selectedCategory:string=''
  ngOnInit(){
    this.dataservice.getData().subscribe((response)=>{
      this.data = response
      // console.log(response)
    })
  }

addToCart(info:any){
 
  this.checkOutData.push(info)
  // console.log(info,this.checkOutData)
  window.alert(`Product added succesfully ${info.title}`)
  this.dataservice.checkOutData=this.checkOutData
  // console.log(this.selectedCategory)
}
}
