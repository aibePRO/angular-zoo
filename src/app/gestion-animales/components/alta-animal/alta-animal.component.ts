import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-alta-animal',
  templateUrl: './alta-animal.component.html',
  styleUrls: ['./alta-animal.component.css']
})
export class AltaAnimalComponent implements OnInit {

  animalForm;
  todook: boolean;

  constructor(
    private fb: FormBuilder,
    private animalesSrv: AnimalesService
  ) { }

  ngOnInit() {
    this.animalForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      bio: ['', Validators.required],
      imagen: ''
    })
    // Para logar los campos.
    // this.animalForm.controls.bio.valueChanges.subscribe(data =>{
    //   console.log(data);
    // });
    // this.animalForm.valueChanges.subscribe(data =>{
    //     console.log(data.bio);
    // });
  }

  enviarDatos() {
    const dataForm = this.animalForm.value;
    this.animalesSrv.nuevoAnimal(dataForm)
      .then(data => {
        if (data) {
          this.todook = true;
        }
      });
  }
}
