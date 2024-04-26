function verificarLados()
{
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outRespuesta = document.getElementById("outRespuesta");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if( ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC >(ladoA + ladoB))
    {
        outRespuesta.textContent = "Los lados no pueden formar un triangulo";
    }
    else
    {
        outRespuesta.textContent = "Los lados pueden formar un triangulo";
        if ( ladoA == ladoB && ladoA == ladoC )
        {
            outTipo.textContent = "Tipo: Equilatero";
        }
        else if ( ladoA == ladoB || ladoA == ladoC || ladoB == ladoC )
        {
            outTipo.textContent = "Tipo: Isosceles"; 
        }
        else
        {
            outTipo.textContent = "Tipo: Escaleno"; 
        }
    }
   
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificarLados);