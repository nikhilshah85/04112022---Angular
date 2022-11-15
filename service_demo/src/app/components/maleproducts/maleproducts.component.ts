import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';

@Component({
  selector: 'app-maleproducts',
  templateUrl: './maleproducts.component.html',
  styleUrls: ['./maleproducts.component.css']
})
export class MaleproductsComponent implements OnInit {


  _greetingsObj:GreetingsService;


  constructor(_greetingsObjRef:GreetingsService) {
    this._greetingsObj = _greetingsObjRef;
   }

   

  ngOnInit(): void {
  }

}
