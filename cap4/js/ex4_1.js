function mostrarTabla()
{
    // crear referencia a los elementos de la pagina
    var inNumero = document.getElementById("inNumero");
    var outTabla = document.getElementById("outTabla");

    // convierte el contenido del campo inNumero
    var numero = Number(inNumero.value);
    // valida el numero
    if (numero == 0 || isNaN(numero))
    {
        alert("Ingrese un numero valido...");
        inNumero.focus();
        return;
    }
    // crea una variable tipo string, que va concatenando la respuesta
    var respuesta = "";

    // creo el bucle de repeticion
    for (var i=1; i<=10; i++)
    {
        // la variable respuesta va acumulando los nuevos contenidos
        respuesta = respuesta + numero + " x " + i +  " = " + numero * i + "\n";
        // outTabla.textContent = respuesta;
    }
    // el contenido de la etiqueta pre es alterado para mostrar la tabla del numero
    outTabla.textContent = respuesta;
}
// crea referencia al boton y luego asocia function al evento click
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click",mostrarTabla);