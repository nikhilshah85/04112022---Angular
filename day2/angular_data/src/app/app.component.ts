import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle:string = 'Nikhil\'s Shopping App'; //premitive datatype
  totalProducts:number = 280;


  productCategories = ['Electronics','Cold-Drinks','T-Shirts','Shoes', 'Fast-Food', 'Furniture', 'Accessories']

  appDetails = {
    appName:'Shopping APP', developedBy:'Nikhi Shah', teamSize:20
  }


  productList = [
    {pId:101, pName:'Pepsi', pCategory:'Cold-Drink', pPrice:50, pDiscountRate:5, pAvailableQty:100},
    {pId:102, pName:'Coke', pCategory:'Cold-Drink', pPrice:50, pDiscountRate:15, pAvailableQty:100},
    {pId:103, pName:'IPhone', pCategory:'Electronics', pPrice:150000, pDiscountRate:3, pAvailableQty:50},
    {pId:104, pName:'Nike', pCategory:'Shoes', pPrice:8000, pDiscountRate:5, pAvailableQty:20},
    {pId:105, pName:'Sandwitches', pCategory:'Fast-Food', pPrice:250, pDiscountRate:5, pAvailableQty:10},
    {pId:106, pName:'Head-Phone', pCategory:'Electronics', pPrice:2500, pDiscountRate:20, pAvailableQty:25},
    {pId:107, pName:'Louiee Phillip', pCategory:'T-Shirt', pPrice:9500, pDiscountRate:5, pAvailableQty:100},
    {pId:109, pName:'Air-Pods', pCategory:'Electronics', pPrice:26000, pDiscountRate:5, pAvailableQty:50},
    {pId:110, pName:'Sofa', pCategory:'Furniture', pPrice:48000, pDiscountRate:25, pAvailableQty:10},
    {pId:111, pName:'Study-Table', pCategory:'Furniture', pPrice:22000, pDiscountRate:35, pAvailableQty:25},
  ]




}
