import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id ==id)!;

  }

  getAllFoodByTag(tag:string):Foods[]{

    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      {name: 'All', count:14},
      {name: 'FastFood', count:4},
      {name: 'Pizza', count:2},
      {name: 'Lunch', count:3},
      {name: 'SlowFood', count:2},
      {name: 'Hamburger', count:1},
      {name: 'Fry', count:1},
      {name: 'Soup', count:1},
    ]
  }
  getAll():Foods[]{
    return [
     {
      id:1,
      price:10,
      name:'Pizza Pepperoni',
      favorite:false,
      star:4.5,
      tags:['FastFood','Pizza','Lunch'],
      imageUrl:'/assets/food-1.jpg',
      cookTime:'10-20',
      origins:['italy'],
     },
     {
      id:2,
      price:20,
      name:'Coffee',
      favorite:true,
      star:4.7,
      tags:['Brekfast','SlowFood','Soup'],
      imageUrl:'/assets/food-2.jpg',
      cookTime:'5-10',
      origins:['US'],
     },
     {
      id:3,
      price:5,
      name:'Cake',
      favorite:false,
      star:3.5,
      tags:['Party','Cake',],
      imageUrl:'/assets/food-3.jpg',
      cookTime:'10-20',
      origins:['China'],
     },
     {
      id:4,
      price:2,
      name:'Ice Cream',
      favorite:false,
      star:3.3,
      tags:['FastFood','Cold'],
      imageUrl:'/assets/food-4.jpg',
      cookTime:'5-10',
      origins:['france'],
     },
     {
      id:5,
      price:11,
      name:'Donut',
      favorite:false,
      star:3.0,
      tags:['FastFood',],
      imageUrl:'/assets/food-5.jpg',
      cookTime:'10-20',
      origins:['italy'],
     },
     {
      id:6,
      price:9,
      name:'French Fries',
      favorite:false,
      star:4.0,
      tags:['FastFood','Fry'],
      imageUrl:'/assets/food-6.jpg',
      cookTime:'10-15',
      origins:['Japan'],
     },
     {
      id:7,
      price:25,
      name:'Meat Ball',
      favorite:true,
      star:4.9,
      tags:['FastFood','Lunch'],
      imageUrl:'/assets/food-7.jpg',
      cookTime:'40-50',
      origins:['US'],
     },
     {
      id:8,
      price:7,
      name:'Burger',
      favorite:true,
      star:4.2,
      tags:['FastFood','Hamburger'],
      imageUrl:'/assets/food-8.jpg',
      cookTime:'15-20',
      origins:['china'],
     },
    ];
  }
}
