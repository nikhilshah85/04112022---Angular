import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {



  empDetails  = [
    {empNo:101, empName:'Nikhil', empDesigantion:'Trainer', empSalary:5000, empGender:'Male'},
    {empNo:102, empName:'Rahul', empDesigantion:'HR', empSalary:5000, empGender:'Male'},
    {empNo:103, empName:'Trupti', empDesigantion:'Accounts', empSalary:5000, empGender:'Female'},
    {empNo:104, empName:'Mohan', empDesigantion:'Trainer', empSalary:5000, empGender:'Male'},
    {empNo:105, empName:'Radhika', empDesigantion:'Accounts', empSalary:5000, empGender:'Female'},
    {empNo:106, empName:'Sohan', empDesigantion:'Accounts', empSalary:5000, empGender:'Male'},
    {empNo:107, empName:'Priya', empDesigantion:'HR', empSalary:5000, empGender:'Female'},
    {empNo:108, empName:'Riya', empDesigantion:'Accounts', empSalary:5000, empGender:'Female'},
    {empNo:109, empName:'Jiya', empDesigantion:'Trainer', empSalary:5000, empGender:'Female'},
    {empNo:110, empName:'Ashok', empDesigantion:'Accounts', empSalary:5000, empGender:'Male'},
        {empNo:111, empName:'Roshan', empDesigantion:'HR', empSalary:5000, empGender:'Male'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
