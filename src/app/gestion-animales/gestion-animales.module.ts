import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GestionAnimalesRoutingModule } from './gestion-animales-routing.module';
import { ListaAnimalesComponent } from './components/lista-animales/lista-animales.component';
import { environment } from 'src/environments/environment';

//Shared
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ListaAnimalesComponent],
  imports: [
    CommonModule,
    GestionAnimalesRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [ListaAnimalesComponent]
})
export class GestionAnimalesModule { }
