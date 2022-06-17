import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IProduct } from '../IProduct';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-famous-dishes',
  templateUrl: './famous-dishes.component.html',
  styleUrls: ['./famous-dishes.component.css']
})
export class FamousDishesComponent implements OnInit {

  result: IProduct[] = [];
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data: IProduct[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {

        Object.assign(a, { quantity: 1, total: a.Price })
      });
    });
  }
    addtocart(dt: any){
      this.cartService.addtocart(dt);
    }
  }
   
    
    
  
// addtocart(dt:any){
//    this.cartService.addtocart(dt);
//  }

