let tablero = new Tablero;
let dados = 0;
let total = 0;
let dado;


function reset() {
  $(".contenedorDeDados").html("gilipollas");
  $(".encabezado_resultado > span").html("0");
  dados = [];
  total = 0;

}

$(".boton").click(function(){
  reset();
  let resultadoMaximo = parseInt(tablero.obtenerResultadoMaximo());
  let resultadoMinimo = parseInt(tablero.obtenerResultadoMinimo());
  tablero.obtenerNumeroDeDados();
  if (tablero.numeroDados) {
    for (i = 0; i < tablero.numeroDados; i++) {
      let dado = new Dado (resultadoMaximo,resultadoMinimo);
      total += dado.numeroAleatorio();
      dados.push(1);
    };
  };
  console.log(dados)
  let dado = new Dado (resultadoMaximo,resultadoMinimo);
  console.log(dado)
  var html = "";

  dados.forEach(function (numeroAleatorio, index) {
    html += '<div class= "dado">';
    html += dado.numeroAleatorio();
    html += '</div>';
  });
  $(".encabezado_resultado > span").html(total);
  $(".contenedorDeDados").html(html);
  console.log(total)

});
