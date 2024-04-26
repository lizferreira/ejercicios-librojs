function verificarNumeroPerfecto()
{
    var inNumero = document.getElementById("inNumero");
    var outRespuesta1 = document.getElementById("outRespuesta1");
    var outRespuesta2 = document.getElementById("outRespuesta2");

    var numero = Number(inNumero.value);

    if( numero==0 || isNaN(numero))
    {
        alert("Numero invalido..");
        inNumero.focus();
        return;
    }

    var suma=0;
    var respuesta="Divisores de " + numero + ": ";

    for (var i=1; i<numero; i++)
    {
        if(numero % i ==0)
        {
            suma=suma+i;
            respuesta = respuesta + i + ", ";
        }
    }
    respuesta = respuesta + i + " " + "(Suma: " + suma + ")";

    if (suma==numero)
    {
        outRespuesta1.textContent = respuesta;
        outRespuesta2.textContent = numero + " Es un Numero Perfecto";
    }
   else{
    outRespuesta1.textContent = respuesta;
    outRespuesta2.textContent = numero + " No es un Numero Perfecto";
    }

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificarNumeroPerfecto);