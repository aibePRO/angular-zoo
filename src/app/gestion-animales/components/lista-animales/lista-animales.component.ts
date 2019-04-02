import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../../services/animales.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {

  animales$;
  newAnimal;

  constructor(private animalesSrv: AnimalesService) { }

  ngOnInit() {
    this.animales$ = this.animalesSrv.obtenerAnimales();
    this.newAnimal = {
      "nombre": "",
      "bio": "",
      "imagen": ""
    }
  }

  nuevoAnimal() {
    const data = {
      "nombre": "Teresa",
      "bio": "Mas patatas",
      "imagen": "avestruz.png"
    }
    this.animalesSrv.nuevoAnimal(data);
  }

  addAnimal(f: NgForm) {
    this.animalesSrv.nuevoAnimal(this.newAnimal);
    f.reset();
    return false;
  }

  
}
