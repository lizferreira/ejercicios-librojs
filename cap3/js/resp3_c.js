function calcularDeposito() {
  var inValor = document.getElementById("inValor");
  var outTiempo = document.getElementById("outTiempo");
  var outVuelto = document.getElementById("outVuelto");

  var valor = Number(inValor.value);

  if (valor < 1.00) {
    alert("Valor Insuficiente");
    inValor.focus();
    return;
  }

  var tiempo;
  var vuelto;

  if (valor >= 3.00) {
    tiempo = 120;
    vuelto = valor - 3.00;
  }
  else if (valor >= 1.75) {
    tiempo = 60;
    vuelto = valor - 1.75;
  }
  else{
    tiempo = 30;
    vuelto = valor - 1.00;
  }

  outTiempo.textContent = "Tiempo: " + tiempo + " min";
  outVuelto.textContent = "Vuelto R$: " + vuelto;
}
var btDeposito = document.getElementById("btDeposito");
btDeposito.addEventListener("click", calcularDeposito);
