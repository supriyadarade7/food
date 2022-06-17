import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public famous:any[]=[];
public grandTotal!: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getdish()
    .subscribe(res=>{
      this.famous = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(dt:any){
this.cartService.removecartItem(dt);
  }

  emptycart(){
    this.cartService.removeAllcart();
  }

  calculatePrice(){

    if(this.famous.length>0){

      this.grandTotal=this.famous.map(pr=>parseInt(pr.price)).reduce((prev,curr)=>{

        return prev+curr;

      })
      console.log("total",this.grandTotal);

    }

  }

  quantity:number=1;
  i=1
  plus(){
if(this.i !=5){
  this.i++;
  this.quantity=this.i;
}
  }

  minus(){
    if(this.i !=1){
      this.i--;
  this.quantity=this.i;
    }
  }

}
