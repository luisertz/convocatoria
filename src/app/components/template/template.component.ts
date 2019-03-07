import { Component  } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
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

  constructor() { }



  guardar( forma: NgForm ) {
    console.log('Posteado weon');
    console.log('ngForm: ', forma);
    console.log('Valor Forma: ', forma.value);
    console. log('Usuario: ', this.usuario);


  }
}
