import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { ListaAnimalesComponent } from './components/lista-animales/lista-animales.component';
import { AltaAnimalComponent } from './components/alta-animal/alta-animal.component';

const routes: Routes = [
  {path: '', component: ListaAnimalesComponent},
  {path: 'agregar', component: AltaAnimalComponent},
  {path: 'animales/:id', component: DetalleAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAnimalesRoutingModule { }
