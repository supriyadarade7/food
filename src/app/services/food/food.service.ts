import { Injectable } from '@angular/core';
import { Foods} from 'src/app/shared/models/food';
//import { Tag } from 'src/app/shared/models/tag';
//import { Tag } from 'src/app/shared/models/tag';
//import { Tag } from 'src/app/shared/models/tag';



@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id:number):Foods{
  return this.getAll().find(food =>food.id == id)!;

}


  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All" ?
    this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));

    //or 
// if(tag=='all')
// return this.getAll()
// else
// return this.getAll().filter(food => food.tags?.includes(tag));
  }


  // getAllTag():Tag[]{
  //   return[
  //     {name:'All',count:14},
  //     {name:'FastFood',count:4},
  //     {name:'pizza',count:2},
  //     {name:'Lunch',count:3},
  //     {name:'Fry',count:1},
  //     {name:'Soup',count:1},
  //   ];
  // }


getAll():Foods[]{
  return[
    {
      id:1,
      Price:200,
      name:'Butter Chicken',
      favorite:false,
      star:2.0,
      tags:['Lunch'],
      imageUrl:'/assets/butter chicken.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
  
    },
    {
      id:2,
      Price:350,
      name:'Chicken 65',
      favorite:false,
      star:3.0,
      tags:['Lunch'],
      imageUrl:'/assets/Tandoori Lamb chops2.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
    },
    
    {
      id:3,
      Price:250,
      name:'Chicken biryani',
      favorite:false,
      star:3.0,
      tags:['Lunch'],
      imageUrl:'/assets/chicken biryani.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
    },
    
    {
      id:4,
      Price:500,
      name:'Curried Parmesan Fish Finger',
      favorite:false,
      star:3.0,
      tags:['Lunch'],
      imageUrl:'/assets/Egg fry masala.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
    },
    
    {
      id:5,
      Price:200,
      name:'Egg Tawa Masala',
      favorite:false,
      star:4.0,
      tags:['Lunch'],
      imageUrl:'/assets/Chicken1 65.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
    },
    
    {
      id:6,
      Price:300,
      name:'goan Prawn curry with raw mango',
      favorite:false,
      star:3.0,
      tags:['Lunch'],
      imageUrl:'/assets/Pav Bhaji.jpg',
      cookTime: '20-30',
      origins:['Lunch'],
    },
    
    {
      id:7,
      Price:400,
      name:'Malabar Fish Biryani',
      favorite:false,
      star:4.0,
      tags:['Lunch'],
      imageUrl: '/assets/Malabar Fish Biryani1.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
    },
    
    {
      id:8,
      Price:400,
      name:'Mutton Biryani',
      favorite:false,
      star:3.0,
      tags:['Lunch'],
      imageUrl:'/assets/Mutton Biryani1.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
    },
    
    {
      id:9,
      Price:350,
      name:'Mutton Korma',
      favorite:false,
      star:4.0,
      tags:['Lunch'],
      imageUrl: '/assets/Misal pav.jpg',
      cookTime:'40-50',
      origins:['Lunch'],
    },
    
    {
      id:10,
      Price:450,
      name:'nihari gosht',
      favorite:false,
      star:3.0,
      tags:['Lunch'],
      imageUrl: '/assets/Spicy chicken pizza.jpg',
      cookTime:'40-50',
      origins:['itali'],
    },
    
    {
      id:11,
      Price:250,
      name:'Tandoori Lamb Chops',
      favorite:true,
      star:4.0,
      tags:['Lunch'],
      imageUrl: '/assets/Tandoori Lamb chops2.jpg',
      cookTime:'40-50',
      origins:['indian'],
    },

    {
      id:12,
      Price:250,
      name:'Tandoori Lamb Chops',
      favorite:true,
      star:4.0,
      tags:['Lunch'],
      imageUrl: '/assets/Rava sherra.jpg',
      cookTime:'40-50',
      origins:['indian'],
    },
    
    ];
}

}

