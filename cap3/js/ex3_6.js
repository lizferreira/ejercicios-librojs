function calcularNotas()
{
    // crear referencias de los elementos
    var inExtracto = document.getElementById("inExtracto");
    var outNotasCien = document.getElementById("outNotasCien");
    var outNotasCincuenta = document.getElementById("outNotasCincuenta");
    var outNotasDiez = document.getElementById("outNotasDiez");

    // limpiar mensajes (caso 2da opcion)
    outNotasCien.textContent = "";
    outNotasCincuenta.textContent = "";
    outNotasDiez.textContent = "";

      // obtener el contenido de los campos
      var extracto = Number(inExtracto.value);

      // si no ingreso o es NaN
      if (extracto==0 || isNaN(extracto))
      {
        alert("Ingrese el valor de extracto correctamente");
        inExtracto.focus();//posiciona en inExtracto
        return;
      }

    //   verificar si el extracto no es multiplo de 10
    if ( extracto % 10 !=0)
    {
        alert("Valor invalido para notas disponibles (R$ 10, 50, 100");
        inExtracto.focus();
        return;
    }

    // calcular notas de 100, 50, y 10
    var notasCien = Math.floor(extracto/100);
    var resto = extracto % 100;
    var notasCincuenta = Math.floor(resto/50);
    resto = resto % 50;
    var notasDiez = Math.floor(resto/10);

    // muestra las notas solo si hay
    if ( notasCien > 0 )
    {
        outNotasCien.textContent = "Notas de R$ 100: " + notasCien;
    }
    if ( notasCincuenta > 0 )
    {
        outNotasCincuenta.textContent = "Notas de R$ 50: " + notasCincuenta;
    }
    if (notasDiez > 0)
    {
        outNotasDiez.textContent = "Notas de R$ 10: " + notasDiez;
    }
    
}
// crea referencia al elemento btMostrar y asocia function al evento click
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click",calcularNotas);