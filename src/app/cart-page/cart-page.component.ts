import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { cartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit{
  Cart!:Cart;
  constructor(private cartService: CartService)
  {
    this.setCart();
  }
  ngOnInit(): void {
    
  }
  setCart(){
    this.Cart=this.cartService.getcart();
  }
  removeFromCart(cartItem:cartItem){
    this.cartService.removeFromcart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:cartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
}



