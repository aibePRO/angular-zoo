import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private afs: AngularFirestore) { }

  obtenerAnimales() {
    return this.afs.collection('animales').snapshotChanges();
  }

  obtenerAnimal(id: string) {
    return this.afs.doc(`animales/${id}`).valueChanges();
  }

  nuevoAnimal(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('animales')
        .add(data)
        .then(res => {
          resolve(true);
        }, err => reject(err));
    })
  }
}
