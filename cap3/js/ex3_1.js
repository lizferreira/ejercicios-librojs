function calcularMedia()
{
    // crear referencia de los elementos de la pagina
    var inNombre = document.getElementById("inNombre");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2")
    var outMedia = document.getElementById("outMedia");
    var outSituacion = document.getElementById("outSituacion");

    // obtener el contenido de los campos de edicion de la pagina
    var nombre = inNombre.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    // calcular la media de las notas
    var media = (nota1 + nota2 )/2;

    // mostrar la media(alterar el contenido del elemento outMedia)
    outMedia.textContent = "Media de las Notas: " + media.toFixed(1);

    // crea una condicion
    if (media >= 7)
    {
        // alterar el texto y estilo de color del elemento outSituacion
        outSituacion.textContent = "Felicitaciones " + nombre + "! Pasaste";
        outSituacion.style.color = "blue";
    }
    else if (media >= 4)
    {
        outSituacion.textContent = "Atencion " + nombre + ". Estas en observacion";
        outSituacion.style.color = "green";
    }
    else
    {
        outSituacion.textContent = "Ups " + nombre + "... No pasaste";
        outSituacion.style.color = "red";
    }
}
// crea una referencia al elemento btResultado (boton)
var btResultado = document.getElementById("btResultado");
// registra un evento asociado al boton, para cargar una funcion
btResultado.addEventListener("click",calcularMedia);
