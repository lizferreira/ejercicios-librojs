function verificador()
{
    // crear referencia a los elementos de la pagina
    var inNumero = document.getElementById("inNumero");
    var outRespuesta = document.getElementById("outRespuesta");

    // obtener el contenido de los elementos
    var numero = Number(inNumero.value);
    // verifica si es par o impar
    var verifica = numero % 2 == 0 ? "Par":"Impar";
    // muestra el mensaje
    outRespuesta.textContent = "Respuesta: " + numero + " es " + verifica;

}

// crear referencia al boton y registra un evento
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificador);