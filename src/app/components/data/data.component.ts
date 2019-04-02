import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
      border: 2px solid red;
  }
  `]
})
export class DataComponent {

   formato = [{
    codigo: 'rev',
    nombre: 'Revista',
  } , {
    codigo: 'cap',
    nombre: 'Capsula',
  } , {
    codigo: 'mus',
    nombre: 'Musical'
  } , {
    codigo: 'hab',
    nombre: 'Hablado'
  } , {
    codigo: 'otro',
    nombre: 'Otro',
  }];
  

  tipopar = [{
    codigo: 'ciu',
    nombre: 'Ciudadano',
  } , {
    codigo: 'est',
    nombre: 'Estudiante',
  } , {
    codigo: 'AC',
    nombre: 'Asociación Civil',
  } , {
    codigo: 'CC',
    nombre: 'Colectivo Cultural',
  } , {
    codigo: 'OT',
    nombre: 'Otro',
    
  }];


  forma: FormGroup;


  constructor() {
  this.forma = new FormGroup( {
    'seudonimo': new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    'participantes': new FormControl ('', [Validators.required, Validators.min(1), Validators.max(5)] ),
    'tema': new FormControl ('', Validators.required),
    'tipopar': new FormControl ('{{ tipopar.nombre }}', Validators.required),
    'programa': new FormControl ('', Validators.required),
    'objetivo': new FormControl ('', Validators.required),
    'formato': new FormControl ( '{{ formato.nombre }}', Validators.required),
    'CorreoElectronico': new FormControl ('', [Validators.required, Validators.email]),
    'caltem1': new FormControl ('', Validators.required),
    'caltem2': new FormControl ('', Validators.required),
    'caltem3': new FormControl ('', Validators.required),
    'caltem4': new FormControl ('', Validators.required),
    'caltem5': new FormControl ('', Validators.required),
    'rectec': new FormControl ('', Validators.required),
    'antecedentes': new FormControl ('', Validators.required),


  });



  }

      guardarCambios() {
        console.log ( this.forma.value );
      }
}