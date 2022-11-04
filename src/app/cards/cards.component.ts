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
    })
  }

addToCart(info:any){
  this.checkOutData.push(info)
  window.alert(`Product added succesfully ${info.title}`)
  this.dataservice.checkOutData=this.checkOutData
}
}
