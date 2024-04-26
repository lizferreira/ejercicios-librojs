function listarNumeros()
{
    // crear referencia a los elementos que la function utilizara
    var inNumero = document.getElementById("inNumero");
    var outRespuesta = document.getElementById("outRespuesta");

    var numero = Number(inNumero.value);

    // verifica la validez del numero
    if (numero == 0 || isNaN(numero))
    {
        alert("Ingrese un numero valido..");
        inNumero.focus();
        return;
    }
    // inicializa la variable respuesta
    var respuesta = "Entre " + numero + " e 1: ";

    // crea un for decreciente
    for( var i=numero; i>1; i--)
    {
        // respuesta va acumulando numeros y comas 
        respuesta = respuesta + i + ", ";
    }
    respuesta = respuesta + i + ".";

    // altera el contenido de outRespuesta
    outRespuesta.textContent = respuesta;
}
// referencia el elemento y luego asocia function al evento click
var btDecrecer = document.getElementById("btDecrecer");
btDecrecer.addEventListener("click",listarNumeros);