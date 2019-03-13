import { Component  } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
      border: 2px solid red;
  }
  `
  ]
})


export class TemplateComponent {

usuario: Object = {

  name: null,
  lastname: null,
  mail: null,
  phone: null,
  address: null,
  delegation: null,
  zip: null


};

delegation = [{
  codigo: 'AO',
  nombre: 'Álvaro Obregón',
} , {
  codigo: 'AZC',
  nombre: 'Azcapotzalco'
}, {
  codigo: 'BJ',
  nombre: 'Benito Juárez'
} , {
  codigo: 'COY',
  nombre: 'Coyoacán'
} , {
  codigo: 'CUAJ',
  nombre: 'Cuajimalpa de Morelos'
} , {
  codigo: 'CUA',
  nombre: 'Cuauhtémoc'
} , {
  codigo: 'GAM',
  nombre: 'Gustavo A. Madero'
} , {
  codigo: 'IZT',
  nombre: 'Iztacalco'
} , {
  codigo: 'IZTA',
  nombre: 'Iztapalapa'
} , {
  codigo: 'MAC',
  nombre: 'Magdalena Contreras'
} , {
  codigo: 'MH',
  nombre: 'Miguel Hidalgo'
} , {
  codigo: 'MIA',
  nombre: 'Milpa Alta'
} , {
  codigo: 'TLA',
  nombre: 'Tláhuac'
} , {
  codigo: 'TLP',
  nombre: 'Tlalpan'
} , {
  codigo: 'VEC', 
  nombre: 'Venustiano Carranza'
} , {
  codigo: 'XOC',
  nombre: 'Xochimilco'
}];

  constructor() { }



  guardar( forma: NgForm ) {
    console.log('Posteado weon');
    console.log('ngForm: ', forma);
    console.log('Valor Forma: ', forma.value);
    console. log('Usuario: ', this.usuario);


  }
}
