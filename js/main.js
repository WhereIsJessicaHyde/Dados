// voy a crear una clase constructora que genere un numero de forma aleatoria.

class Dado {
  constructor (numeroDeCaras, tiradaMinima) {
    this.numeroDeCaras = numeroDeCaras;
    this.tiradaMinima = tiradaMinima;
    let resultado = 0;
  }
  numeroAleatorio () {
    let resultado = Math.floor(Math.random() * (this.numeroDeCaras - this.tiradaMinima) + this.tiradaMinima);
    return resultado;
  }
}
