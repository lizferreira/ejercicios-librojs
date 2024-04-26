// declara la funcion mostrarHola
function mostrarHola() {
  // obtiene el contenido del campo (con id=) nombre
  var nombre = document.getElementById("nombre").value;
  // muestra en el apartado de respuesta
  document.getElementById("respuesta").textContent = "Hola " + nombre;
}

// crea una referencia al boton con id=mostrar
var mostrar = document.getElementById("mostrar");
// registra para el boton mostrar una escucha para el evento click
// que al seleccionar llama a la funcion mostrarHola
mostrar.addEventListener("click", mostrarHola);
