import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ISouthdish } from '../../isouthdish';


@Component({
  selector: 'app-southindian',
  templateUrl: './southindian.component.html',
  styleUrls: ['./southindian.component.css']
})
export class SouthindianComponent implements OnInit {
  constructor(private api:ApiService,private cartService:CartService) { }

  result:ISouthdish []=[];
 
   ngOnInit(): void {
    
     this.api.getData1().subscribe((data: ISouthdish []) => {
       console.log(data);
       this.result = data;
   });
 
   }
 
   addtocart(dt: any){
     this.cartService.addtocart(dt);
   }
 

}
