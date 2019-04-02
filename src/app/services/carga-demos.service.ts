import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file.item';


@Injectable({
  providedIn: 'root'
})
export class CargaDemosService {

  private CARPETA_DEMOS = 'demo';

  constructor( private db: AngularFirestore) { }

  cargaDemoFirebase(demos: FileItem []) {
    console.log(demos);
  }

    private guardarDemo ( demo: {nombre: string, url: string}) {
      this.db.collection(`/${ this.CARPETA_DEMOS }`)
          .add( demo );
    }
  }


