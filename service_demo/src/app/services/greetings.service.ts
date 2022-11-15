import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  appName = "Service demo";
  appPurpose = "Training";
  counter = 0;
  
  greetUser()
  {
    alert('Welcome to Service Demo');
  }

  addCounter()
  {
    this.counter = this.counter + 1;
    return this.counter;
  }
  constructor() { }
}
