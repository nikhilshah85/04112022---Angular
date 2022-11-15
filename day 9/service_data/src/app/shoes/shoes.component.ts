import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {


  _productsObj:ProductsService;
  constructor(private _productsObjREF:ProductsService) {
    this._productsObj = _productsObjREF;
   }

  ngOnInit(): void {
  }

}
