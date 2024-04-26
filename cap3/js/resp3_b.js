function verificaSituacion() {
  var inVelocidadMax = document.getElementById("inVelocidadMax");
  var inVelocidad = document.getElementById("inVelocidad");
  var outSituacion = document.getElementById("outSituacion");

  var velocidadMax = Number(inVelocidadMax.value);
  var velocidad = Number(inVelocidad.value);

  if (velocidad <= velocidadMax) {
    outSituacion.textContent = "Situacion: Sin Multa";
  }
  else{
    var velocidadMax1 = velocidadMax * 1.2;
    if (velocidad <= velocidadMax1)
    {
      outSituacion.textContent = "Situacion: Multa Leve";
    }
    else{
      outSituacion.textContent = "Situacion: Multa Grave";
    }
  }

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificaSituacion);
