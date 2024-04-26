function crearEstrellas()
{
    var inLineas = document.getElementById("inLineas");
    var outEstrellas = document.getElementById("outEstrellas");

    var lineas = Number(inLineas.value);

    if(lineas == 0 || isNaN(lineas))
    {
        alert("Numero invalido...");
        inLineas.focus();
        return;
    }


    var estrellas="";
    for (var i=0; i<lineas; i++)
    {
        for( var j=0; j<i; j++)
        {
            estrellas = estrellas + "*";
        }

        estrellas=estrellas+"\n";
    }

    outEstrellas.textContent=estrellas;
}

var btCrear = document.getElementById("btCrear");
btCrear.addEventListener("click",crearEstrellas);