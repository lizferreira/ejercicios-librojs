function calcularRaiz()
{
    // crear una referencia a los elementos de la pagina
    var inNumero = document.getElementById("inNumero");
    var outRespuesta = document.getElementById("outRespuesta");

    var numero = Number(inNumero.value); //obtiene el contenido del campo inNumero

    // si no ingreso o es invalido (isNaN)
    if( numero == 0 || isNaN(numero))
    {
        alert("Ingrese un numero valido...");//muestra un alerta
        inNumero.focus();//se posiciona en el campo inNumero
        return;//retorna
    }

    var raiz = Math.sqrt(numero);//calcula la raiz cuadrada del numero

    // si el valor de la variable es igual a este valor redondeado para abajo
    // if ( raiz == Math.floor(raiz))//primer metodo
    if (raiz % 1 == 0)
    {
        outRespuesta.textContent = "Raiz: " + raiz;//muestra la raiz 
    }
    else
    {
        // si no muestra el mensaje indicando que no hay raiz exacta
        outRespuesta.textContent = "No hay raiz exacta para " + numero;
    }
}
// crea referencia al elemento btMostrar y registrar un evento que va cargar la funcion
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click",calcularRaiz);