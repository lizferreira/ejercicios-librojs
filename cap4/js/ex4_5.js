// declara e inicializa contadores y acumuladores(variables globales)
var numGastos = 0;
var valTotal = 0;

// variable tipo string que acumula los gastos
var respuesta = "";

function registrarCuenta()
{
    // crear referencia a los elementos de la pagina utilizados por la function
    var inDescripcion = document.getElementById("inDescripcion");
    var inValor = document.getElementById("inValor");
    var outListaGastos = document.getElementById("outListaGastos");
    var outTotal = document.getElementById("outTotal");

    // obtiene el contenido de los campos
    var descripcion = inDescripcion.value;
    var valor = Number(inValor.value);

    // verifica el ingreso de los datos
    if (valor == 0 || isNaN(valor))
    {
        alert("Ingrese los datos correctamente...");
        inDescripcion.focus();
        return;
    }

    // agrega valores al contador y acumulador
    numGastos++;
    valTotal = valTotal + valor;

    // concatena las respuestas
    respuesta = respuesta + descripcion + "\t- R$: " + valor.toFixed(2) + "\n";

    // altera el contenido de las etiquetas de respuesta
    outListaGastos.textContent = respuesta + "--------------------------------";
    outTotal.textContent = numGastos + " Gasto(s) - Total R$: " + valTotal.toFixed(2);

    // limpiar los campos y posiciona el cursor en inDescripcion
    inDescripcion.value = "";
    inValor.value = "";
    inDescripcion.focus();
}

// referencia el elementos y despues asocia function al evento click
var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarCuenta);