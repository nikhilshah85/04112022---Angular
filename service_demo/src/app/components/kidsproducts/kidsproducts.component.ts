import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';

@Component({
  selector: 'app-kidsproducts',
  templateUrl: './kidsproducts.component.html',
  styleUrls: ['./kidsproducts.component.css']
})
export class KidsproductsComponent implements OnInit {

  _greetingsObj:GreetingsService;


  constructor(_greetingsObjRef:GreetingsService) {
    this._greetingsObj = _greetingsObjRef;
   }


  ngOnInit(): void {
  }

}
