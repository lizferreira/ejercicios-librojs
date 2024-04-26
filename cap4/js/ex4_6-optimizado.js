function verificarPrimo()
{
    // crear referencia a los elementos de la pagina
    var inNumero = document.getElementById("inNumero");
    var outRespuesta = document.getElementById("outRespuesta");

    var num = Number(inNumero.value); //obtiene el numero ingresado

    // verifica si ingreso correctamente el campo inNumero
    if (num==0 || isNaN(num))
    {
        alert("Numero Invalido...");
        inNumero.focus();
        return;
    }


// -----------------------------------------
    // declara e inicializa la variable tipo flag
    var temDivisor = 0;

    // recorre los posibles divisores de num
    for (var i = 2; i <= num/2; i++)
    {
        if ( num%i == 0 )
        {
            temDivisor = 1; //cambia el flag
            break;//sale del bucle
        }
    }

    // si num>1 y no posee divisores
    if ( num> 1 && !temDivisor)
    {
        outRespuesta.textContent = num + " Es primo";
    }
    else
    {
        outRespuesta.textContent = num + " No es primo";
    }

}

// referncia al elemento y luego asocia function al evento click
var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click",verificarPrimo);