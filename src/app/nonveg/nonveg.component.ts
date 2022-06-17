import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
//import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit {

  foods:Foods[]=[];
  constructor(private fs:FoodService,private route:ActivatedRoute) { }

  ngOnInit(): void {
this.route.params.subscribe(params =>{
  if(params['searchItem'])
  this.foods=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
  // else if(params['tag'])
  // this.foods=this.fs.getAllFoodByTag(params['tag'])
  else
   this.foods = this.fs.getAll();
})

    
  }

}
