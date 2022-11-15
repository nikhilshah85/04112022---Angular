import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaleproductsComponent } from './components/maleproducts/maleproducts.component';
import { FemaleproductsComponent } from './components/femaleproducts/femaleproducts.component';
import { KidsproductsComponent } from './components/kidsproducts/kidsproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    MaleproductsComponent,
    FemaleproductsComponent,
    KidsproductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
