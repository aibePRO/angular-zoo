import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private afs: AngularFirestore) { }

  obtenerAnimales() {
    return this.afs.collection('animales').valueChanges();
  }

  nuevoAnimal(data: any) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('animales')
        .add(data)
        .then(res => {}, err => reject(err));
    })
  }
}
