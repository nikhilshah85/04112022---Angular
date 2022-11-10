import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //name of the component
  templateUrl: './app.component.html', //html reference
  styleUrls: ['./app.component.css'] //css file reference
})
export class AppComponent {
 

  projectName:string = "Shopping APP";
  teamSize:number = 20;
  clientName:string = "Amazon";
  isProjectLive:boolean = false;
  projectCost:number = 50.50;

  favProducts:string[] = ['Pepsi','IPhone','Maggie', 'Air Pods','Appy','Sandwitches','Noodles']

}
