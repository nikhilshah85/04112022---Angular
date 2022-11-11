import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SalutationPipe } from './pipes/salutation.pipe';
import { BonusPipe } from './pipes/bonus.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SalutationPipe,
    BonusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
