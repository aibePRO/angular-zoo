import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GestionAnimalesRoutingModule } from './gestion-animales-routing.module';
import { ListaAnimalesComponent } from './components/lista-animales/lista-animales.component';
import { environment } from 'src/environments/environment';

//Shared
import { MaterialModule } from '../material/material.module';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { AltaAnimalComponent } from './components/alta-animal/alta-animal.component';

@NgModule({
  declarations: [ListaAnimalesComponent, DetalleAnimalComponent, AltaAnimalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
