import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  customerList = ['Nikhil','Priya','Riya','Jiya','Amit','Sumit','Mohan']

  ngOnInit(): void {
  }

}
