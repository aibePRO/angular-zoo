import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionAnimalesModule } from './gestion-animales/gestion-animales.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GestionAnimalesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
