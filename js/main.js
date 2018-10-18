
class Tablero {
  constructor () {
    let numeroDados =0;
    let tiradaMinima = 0;
    let tiradaMaxima = 0;
  }

  obtenerNumeroDeDados () {
    return this.numeroDados = $(".tirada_numeroDados").val();
  };

  obtenerResultadoMinimo () {
    return this.resultadoMinimo = $(".tirada_minima").val();
  };

  obtenerResultadoMaximo () {
    return this.resultadoMaximo = $(".tirada_maxima").val();
  };
}



// voy a crear una clase constructora que genere un numero de forma aleatoria.

class Dado {
  constructor (numeroDeCaras, tiradaMinima) {
    this.numeroDeCaras = numeroDeCaras;
    this.tiradaMinima = tiradaMinima;
    let resultado = 0;
  }
  numeroAleatorio () {
    let resultado = Math.floor(Math.random() * ((this.numeroDeCaras + 1) - this.tiradaMinima) + this.tiradaMinima);
    return resultado;
  }
}
