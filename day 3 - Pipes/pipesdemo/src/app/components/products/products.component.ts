import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  productInfo = {
    pId:101, pName:'IPhone', pPrice:1800, pIsInStock:true, pAvailableQty:10
  }
  

  ngOnInit(): void {
  }

}
