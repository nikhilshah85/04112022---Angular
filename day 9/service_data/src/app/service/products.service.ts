import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList = [
    {pId:101, pName:'Pepsi',pCategory:'Cold-Drink',pPrice:50, pIsInStock:true},
    {pId:102, pName:'Appy',pCategory:'Cold-Drink',pPrice:50, pIsInStock:true},
    {pId:103, pName:'IPhone',pCategory:'Electronics',pPrice:50, pIsInStock:false},
    {pId:104, pName:'Fossil',pCategory:'Electronics',pPrice:50, pIsInStock:true},
    {pId:105, pName:'Air-Pods',pCategory:'Electronics',pPrice:50, pIsInStock:true},
    {pId:106, pName:'Dell Lattitude',pCategory:'Electronics',pPrice:50, pIsInStock:true},
    {pId:107, pName:'Mac Book Air',pCategory:'Electronics',pPrice:50, pIsInStock:false},
    {pId:108, pName:'Cold-Cofee',pCategory:'Cold-Drink',pPrice:50, pIsInStock:true},
    {pId:109, pName:'Orange Juice',pCategory:'Cold-Drink',pPrice:50, pIsInStock:true},
    {pId:110, pName:'Nike',pCategory:'Shoes',pPrice:50, pIsInStock:true},
    {pId:111, pName:'Puma',pCategory:'Shoes',pPrice:50, pIsInStock:true},
    {pId:112, pName:'Red-Tape',pCategory:'Shoes',pPrice:50, pIsInStock:false},
    {pId:113, pName:'New Balance',pCategory:'Shoes',pPrice:50, pIsInStock:true},
    {pId:114, pName:'Apple Watch',pCategory:'Electronics',pPrice:50, pIsInStock:true},
    {pId:115, pName:'IPad',pCategory:'Electronics',pPrice:50, pIsInStock:true},
  ]

    shoes:any[] = [];
    colddrinks:any[] = [];
    electronics:any[] =[];

  getShoes()
  {
      for (let index = 0; index < this.productList.length; index++) {
        if (this.productList[index].pCategory === 'Shoes') {
          this.shoes.push(this.productList[index]);
        }
        
      }
  }

  getElectronics()
  {
      for (let index = 0; index < this.productList.length; index++) {
        if (this.productList[index].pCategory === 'Electronics') {
          this.electronics.push(this.productList[index]);
        }
        
      }
  }

  
  getColdDrinks()
  {
      for (let index = 0; index < this.productList.length; index++) {
        if (this.productList[index].pCategory === 'Cold-Drinks') {
          this.colddrinks.push(this.productList[index]);
        }
        
      }
  }


  constructor() { }
}
