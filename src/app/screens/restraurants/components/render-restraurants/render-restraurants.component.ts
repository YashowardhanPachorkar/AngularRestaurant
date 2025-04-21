import { Component } from '@angular/core';

@Component({
  selector: 'app-render-restraurants',
  templateUrl: './render-restraurants.component.html',
  styleUrls: ['./render-restraurants.component.css']
})

export class RenderRestraurantsComponent {
  restraurants = [
    {name:"Hotel Joshi Kitchen",description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea? Eos fugiat laboriosam ipsum sapiente porro deserunt hic maiores fuga obcaecati. Aliquid nesciunt officia accusamus minus, sint voluptate voluptatum quis, distinctio consectetur vel sed, explicabo provident quasi soluta odit quo?',src:'/assets/anna.jpeg',type:"both",ratting:"10/10"}, 
    {name:"Hotel Sandeep",description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea? Eos fugiat laboriosam ipsum sapiente porro deserunt hic maiores fuga obcaecati. Aliquid nesciunt officia accusamus minus, sint voluptate voluptatum quis, distinctio consectetur vel sed, explicabo provident quasi soluta odit quo?',src:'/assets/amantran.jpeg',type:"both",ratting:"10/10"}, 
    {name:"FNF",description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea? Eos fugiat laboriosam ipsum sapiente porro deserunt hic maiores fuga obcaecati. Aliquid nesciunt officia accusamus minus, sint voluptate voluptatum quis, distinctio consectetur vel sed, explicabo provident quasi soluta odit quo?',src:'/assets/fnf.jpeg',type:"both",ratting:"10/10"}, 
    {name:"Wadeshwar",description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea? Eos fugiat laboriosam ipsum sapiente porro deserunt hic maiores fuga obcaecati. Aliquid nesciunt officia accusamus minus, sint voluptate voluptatum quis, distinctio consectetur vel sed, explicabo provident quasi soluta odit quo?',src:'/assets/ruchira.jpeg',type:"non-veg",ratting:"1/10"},
    {name:"MIT Canteen",description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea? Eos fugiat laboriosam ipsum sapiente porro deserunt hic maiores fuga obcaecati. Aliquid nesciunt officia accusamus minus, sint voluptate voluptatum quis, distinctio consectetur vel sed, explicabo provident quasi soluta odit quo?',src:'/assets/viit_canteen_hotel.jpeg',type:"veg",ratting:"0/10"},
    {name:"Vaishali hotel",description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea? Eos fugiat laboriosam ipsum sapiente porro deserunt hic maiores fuga obcaecati. Aliquid nesciunt officia accusamus minus, sint voluptate voluptatum quis, distinctio consectetur vel sed, explicabo provident quasi soluta odit quo?',src:'/assets/aunty.jpeg',type:"veg",ratting:"5/10"}, 
    {name:"Rupali hotel",description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ea? Eos fugiat laboriosam ipsum sapiente porro deserunt hic maiores fuga obcaecati. Aliquid nesciunt officia accusamus minus, sint voluptate voluptatum quis, distinctio consectetur vel sed, explicabo provident quasi soluta odit quo?',src:'/assets/kaku_1.jpeg',type:"veg",ratting:"9/10"}
  ]; 

  type = 'veg'; 

  changeType(typeToChange:string){
    console.log(this.type)
    this.type= typeToChange; 
  }


}
