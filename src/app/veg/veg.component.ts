import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { Ivegdeish } from '../../ivegdeish';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  constructor(private api:ApiService,private cartService:CartService) { }

  result:Ivegdeish []=[];
 
   ngOnInit(): void {
    
     this.api.getData1().subscribe((data: Ivegdeish []) => {
       console.log(data);
       this.result = data;
   });
 
   }
 
   addtocart(dt: any){
     this.cartService.addtocart(dt);
   }
 

}
