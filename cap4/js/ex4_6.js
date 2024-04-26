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

    var numDivisores = 0; //declara e inicializa contador

    // recorre todos los posibles divisores del numero
    for (var i=1; i<= num; i++)
    {
        // vefifica si i(1, 2, 3...) es divisor de num
        if (num % i == 0)
        {
            numDivisores++; //si es incrementa el contador 
        }
    }

    // si posee solo 2 divisores, es primo
    if ( numDivisores == 2 )
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