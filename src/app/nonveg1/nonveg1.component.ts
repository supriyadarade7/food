import { Component, OnInit } from '@angular/core';
import { INonvegdish } from '../../inonvegdish';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nonveg1',
  templateUrl: './nonveg1.component.html',
  styleUrls: ['./nonveg1.component.css']
})
export class Nonveg1Component implements OnInit {
  
  
  

  constructor(private api:ApiService,private cartService:CartService) { }

 result:INonvegdish[]=[];

  ngOnInit(): void {
   
    this.api.getData1().subscribe((data: INonvegdish[]) => {
      console.log(data);
      this.result = data;
  });

  }

  addtocart(dt: any){
    this.cartService.addtocart(dt);
  }
}
