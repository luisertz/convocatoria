import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;


  constructor() { 
  this.forma = new FormGroup( {
    'nombre': new FormControl ('Luisillo'),
    'apellidos': new FormControl (''),
    'Correo Electronico': new FormControl (''),
    'Telefono Directo': new FormControl (''),
    'Direccion': new FormControl (''),
    'Delegacion': new FormControl (''),
    'C.P.': new FormControl (''),


  })



  }

      guardarCambios(){
        console.log ( this.forma.value );
      }
}
