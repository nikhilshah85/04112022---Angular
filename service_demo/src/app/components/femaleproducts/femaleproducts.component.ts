import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';

@Component({
  selector: 'app-femaleproducts',
  templateUrl: './femaleproducts.component.html',
  styleUrls: ['./femaleproducts.component.css']
})
export class FemaleproductsComponent implements OnInit {

 
  _greetingsObj:GreetingsService;


  constructor(_greetingsObjRef:GreetingsService) {
    this._greetingsObj = _greetingsObjRef;
   }

  ngOnInit(): void {
  }

}
