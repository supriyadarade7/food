import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../IProduct';
// import { Cart } from '../shared/models/Cart';
// import { cartItem } from '../shared/models/cartItem';
// import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService { 
  public cartItemList:IProduct[]=[]
  public famousdishList= new BehaviorSubject<any>([]);

  constructor() {}
  getdish(){
 return this.famousdishList.asObservable();
  }

  setdish(famousdish:any){
    this.cartItemList.push(...famousdish);
    this.famousdishList.next(famousdish);

     }

     addtocart(famousdish : any)
     {
       this.cartItemList.push(famousdish);
       this.famousdishList.next(this.cartItemList);
       this.getTotalPrice();
       console.log(this.cartItemList);
     }
     getTotalPrice() : number{
       let grandTotal =0;
       this.cartItemList.map((a:any)=>{
         grandTotal += a.total;

       })
       return grandTotal;
     }
     removecartItem(famousdish:any){
       this.cartItemList.map((a:any,index:any)=>{
         if(famousdish.id=== a.id){
           this.cartItemList.splice(index,1);
         }

       })
       this.famousdishList.next(this.cartItemList);
     }
     removeAllcart(){
       this.cartItemList =[]
       this.famousdishList.next(this.cartItemList);

     }
     
  //private cart:Cart =new Cart();
  // addTocart(food:Foods) :void{
  //   let Cartitem = this.cart.items.find(item => item.food.id===food.id)
  //   if(Cartitem){
  //     this.changeQuantity(food.id,cartItem.quantity +1)
  //     return;
  //   }
  //   this.cart.items.push(new cartItem(food));
      
  //     }
    
  //     removeFromcart(foodId:number):void{
  //       this.cart.items
  //     = this.cart.items.filter(item => item.food.id !=foodId)
    
  //     }
    
  //     changeQuantity(quantity:number,foodId:number){
  //       let cartItems= this.cart.items.find(item => item.food.id === foodId)
  //       if(!cartItem)return;
  //       cartItem.quantity = quantity;
  //     }
    
  //     getcart
     }
  

