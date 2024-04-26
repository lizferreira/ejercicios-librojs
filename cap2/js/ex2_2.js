function convertirDuracion()
{
    // crear referencia a los elementos de la pagina
    var inTitulo = document.getElementById("inTitulo");
    var inDuracion = document.getElementById("inDuracion");
    var outTitulo = document.getElementById("outTitulo");
    var outRespuesta = document.getElementById("outRespuesta");

    // obtener los contenidos de los campos de entrada
    var titulo = inTitulo.value;
    var duracion = Number(inDuracion.value);

    // redondear para abajo el resultado de la division
    var horas = Math.floor(duracion/60);
    // obtener el resto de la division entre los numeros
    var minutos = duracion % 60;
    // modificar el contenido de los parrafos de respuesta
    outTitulo.textContent = titulo;
    outRespuesta.textContent = horas + " hora(s) " + minutos + " minuto(s)";
}

// crear una referencia al elemento btConvertir (boton)
var btConvertir = document.getElementById("btConvertir");
// registrar un evento asociado al boton, para cargar la funcion
btConvertir.addEventListener("click",convertirDuracion);