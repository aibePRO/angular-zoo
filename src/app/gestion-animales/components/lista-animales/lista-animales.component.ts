import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../../services/animales.service';
import { NgForm } from '@angular/forms';
import { Animal } from '../../model/animal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'bio', 'imagen'];
  panelOpenState = false;
  step = 0;
  animales$;
  newAnimal: Animal;

  constructor(private animalesSrv: AnimalesService) { }

  ngOnInit() {
    this.animales$ = this.animalesSrv.obtenerAnimales();
    this.newAnimal = new Animal('', '', '', '');
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  nuevoAnimal() {
    const data = new Animal("Avestruz", "Teresa", "Mas patatas", "avestruz.png");
    this.animalesSrv.nuevoAnimal(data);
  }

  addAnimal(f: NgForm) {
    this.animalesSrv.nuevoAnimal(this.newAnimal);
    f.reset();
    this.prevStep();
    return false;
  }


}
