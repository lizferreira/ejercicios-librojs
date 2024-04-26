function repetirFruta()
{
    // crea referencia de los elementos de la pagina
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outRespuesta = document.getElementById("outRespuesta");

    // obtener el contenido de los campos 
    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if( numero==0 ||  isNaN(numero))
    {
        alert("Numero invalido..");
        inNumero.focus();
        return;
    }

    var respuesta= fruta + "";
    for (var i=1; i<numero; i++)
    {
        respuesta=respuesta + "*" + fruta;
    }

    outRespuesta.textContent = respuesta;
}
var btRepetirFruta = document.getElementById("btRepetirFruta");
btRepetirFruta.addEventListener("click",repetirFruta);