import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatacallsService {


private _httpObj:HttpClient;
  commentsData:any;

  constructor(private _httpObjREF:HttpClient) {
    this._httpObj = _httpObjREF;
   }

   getCommentsData()
   {
        this._httpObj.get('https://jsonplaceholder.typicode.com/comments').subscribe(data =>{
          this.commentsData = data;
          console.log(data);
        })
   }




}
