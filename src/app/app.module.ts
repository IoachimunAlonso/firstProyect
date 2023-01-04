import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoSaintComponent } from './info-saint/info-saint.component';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    InfoSaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
