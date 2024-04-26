function calcularValor() {
  // crear referencias
  var inValorUso = document.getElementById("inValorUso");
  var inTiempoUso = document.getElementById("inTiempoUso");
  var outValor = document.getElementById("outValor");

  // obtener el contenido de los campos de entrada
  var valorUso = Number(inValorUso.value);
  var tiempoUso = Number(inTiempoUso.value);

  // 
  var tiempoTotalUso = Math.ceil(tiempoUso/15);
  var valorPagar = valorUso * tiempoTotalUso ;

  // mostrar resultado
  outValor.textContent = "Valor a Pagar R$: " + valorPagar.toFixed(2);
}

// crear referencia con el boton
var btCalcular = document.getElementById("btCalcular");
// registrar evento asociado al boton
btCalcular.addEventListener("click",calcularValor)
