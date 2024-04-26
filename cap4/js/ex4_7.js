function rellenarEstrellas()
{
    // crear referencia a los elementos html maninpulados por la function
    var inNumero = document.getElementById("inNumero");
    var outEspacios = document.getElementById("outEspacios");

    var num = Number(inNumero.value); //obtiene el contenido del campo inNumero

    if ( num == 0 || isNaN(num))
    {
        alert("Numero invalido");
        inNumero.focus();
        return;
    }

    var estrellas = ""; //declarar variable que va concatenar las estrellas
    //crear bucle de repeticion de 1 hasta el numero ingresado
    for (var i=1; i<=num; i++)
    {
        if( i%2==1 )
        {
            estrellas = estrellas + "*"; //en la posicion impar de i: *
        }
        else
        {
            estrellas = estrellas + "-"; //en la posicion par: -
        }
    }
    outEspacios.textContent = estrellas;//muestra las estrellas
}
// crear referencia al boton y luego asocia function al evento click
var btRellenar = document.getElementById("btRellenar");
btRellenar.addEventListener("click",rellenarEstrellas);