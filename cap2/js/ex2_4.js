function calcularPrecio()
{
    // crear referencia a los elementos de la pagina
    var inKilo = document.getElementById("inKilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    // obtener contenido de los campos de entrada
    var kilo = Number(inKilo.value);
    var consumo = Number(inConsumo.value);
    
    // calcular valor a pagar
    var valor = (kilo/1000) * consumo;

    // modificar el contenido de la linea de respuesta
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

// crear referencia al elemento btCalulcar
var btCalular = document.getElementById("btCalcular");
// regristar un evento asociado al boton, para cargar la funcion
btCalular.addEventListener("click", calcularPrecio);