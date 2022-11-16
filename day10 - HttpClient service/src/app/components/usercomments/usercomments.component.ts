import { Component, OnInit } from '@angular/core';
import { DatacallsService } from 'src/app/services/datacalls.service';

@Component({
  selector: 'app-usercomments',
  templateUrl: './usercomments.component.html',
  styleUrls: ['./usercomments.component.css']
})
export class UsercommentsComponent implements OnInit {

  _dataCallObj:DatacallsService;


  constructor(_dataCallObjREF:DatacallsService) {

    this._dataCallObj = _dataCallObjREF;
   }

  ngOnInit(): void {
  }

}
