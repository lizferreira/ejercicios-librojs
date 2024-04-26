function calcularPeso() {
  // crear referencia de los elementos utilizados en la funcion
  var inNombre = document.getElementById("inNombre");
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFemenino = document.getElementById("rbFemenino");
  var inAltura = document.getElementById("inAltura");
  var outRespuesta = document.getElementById("outRespuesta");

  // obtener el contenido de los campos de edicion de la pagina
  var nombre = inNombre.value;
  var masculino = rbMasculino.checked;
  var femenino = rbFemenino.checked;
  var altura = Number(inAltura.value);

  //   calcular peso femenino y masculino
  var pesoMasculino = (22 * Math.pow(altura, 2)).toFixed(2);
  var pesoFemenino = (21 * Math.pow(altura, 2)).toFixed(2);

  // verificar si el nombre fue ingresado y sexo seleccionado
  if (nombre == "" || (masculino == false && femenino == false)) {
    alert("Por favor, ingrese el nombre y seleccione el sexo..");
    inNombre.focus(); //posiciona (enfoca) en el campo de edicion inNombre
    return;
  }

  // si la altura este vacio (0)  o NaN: Not-a-Number (un texto fue ingresado, por ejemplo)
  if ((altura = 0 || isNaN(altura))) {
    alert("Por favor, ingrese la altura correctamente...");
    inAltura.focus();
    return;
  }

  // si es masculino (significa si masculino == true)
  if (masculino) {
    //mostrar la respuesta (altera el contenido de la linea outRespuesta)
    outRespuesta.textContent =
      nombre + ": Tu peso ideal es " + pesoMasculino + " kg";
  } else {
    //mostrar la respuesta (altera el contenido de la linea outRespuesta)
    outRespuesta.textContent =
      nombre + ": Tu peso ideal es " + pesoFemenino + " kg";
  }
}

// METODO 2 PARA LIMPIAR CAMPOS
function limpiarCampos() {
    // recargar la pagina
    location.reload();
    // posiciona el enfoque en el elemento inNombre
    document.getElementById("inNombre").focus();
  }

// crear referencia al elemento btCalcular y registra el evento asociado a calcularPeso
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);


var btLimpiar = document.getElementById("btLimpiar");
btLimpiar.addEventListener("click", limpiarCampos);
// ----------------------------
// METODO 1 PARA LIMPIAR CAMPOS

// function limpiarCampos()
// {
//     // limpiar el contenido de los elementos
//     document.getElementById("inNombre").value = "";
//     document.getElementById("rbMasculino").checked = false;
//     document.getElementById("rbFemenino").checked = false;
//     document.getElementById("inAltura").value = "";
//     document.getElementById("outRespuesta").textContent = "";

//     // posiciona o enfoca al elemento inNombre
//     document.getElementById("inNombre").focus();
// }
// // crear referencia al elemento limpiar campos y registra el evento
// var btLimpiar = document.getElementById(btLimpiar);
// btLimpiar.addEventListener("click", limpiarCampos);

// -----------------------
