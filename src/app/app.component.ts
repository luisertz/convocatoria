import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  palabra = 'SANDIA';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;
  letrapres = true;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor () {
    this.palabraOculta = '* '.repeat ( this.palabra.length);
  }

  comprobar ( letra ) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for ( let i = 0; i < this.palabra.length; i++) {

      if ( this.palabra[i] === letra ) {
        palabraOcultaArr[i] = letra;

      }
    }
      this.palabraOculta = palabraOcultaArr.join(' ');
      this.verificaGane();

  }

  verificaGane() {
      const palabraArr = this.palabraOculta.split (' ');
      const palabraEvaluar = palabraArr.join('');

      if (palabraEvaluar === this.palabra ) {
        this.gano = true;
        console.log('GANASTE MEN');
      }

      if (this.intentos >= 9) {
        this.perdio = true;
        console.log('PERDISTE MEN');

      }
  }

  existeLetra ( letra ) {
    if (this.palabra.indexOf(letra) >= 0 ) {
     // console.log('Letra ' + letra, ' existe');
    } else {
     // console.error('Letra ' + letra, ' NO existe');
      this.intentos++;
    }


  } }
