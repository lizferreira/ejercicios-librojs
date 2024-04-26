function calcularHuso() {
  // crear una referencia con los elementos de la pagina
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var outHoraFrancia = document.getElementById("outHoraFrancia");

  // obtener y convertir el contenido del campo inHoraBrasil
  var horaBrasil = Number(inHoraBrasil.value);

  // si no ingreso o es not-a-number (NaN)
  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("Ingrese la hora en Brasil correctamente"); //muestra un alerta
    inHoraBrasil.focus(); //posiciona en inHoraBrasil
    return;
  }

  var horaFrancia = horaBrasil + 5; //calcular el horario en francia

  //   se pasa de las 24 hs en francia
  if (horaFrancia > 24) {
    horaFrancia = horaFrancia - 24; //resta 24
  }
  // muestra la respuesta (altera el contenido del elemento outHoraFrancia)
  outHoraFrancia.textContent = "Hora en Francia: " + horaFrancia.toFixed(2);
}

// crea una referencia al elemento btMostrar y registra el evento asociado a function
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularHuso);
