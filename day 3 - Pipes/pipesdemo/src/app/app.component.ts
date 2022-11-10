import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  firstName = "NIKhiL";
  lastName = "shah";
  salary = 5000;
  doj = new Date();

  contactInfo = { city:'Mumbai',Address:'A4545 Somebuilding', street : 'North B ', phone:25656465,Mobile:989898989898, email:'someonee@gmail.com' }




}
