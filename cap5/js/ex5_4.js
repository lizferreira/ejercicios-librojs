var criaturas = []; //declara el vector global

function agregarCriaturas()
{
    // crear referencia a los elementos de entrada de datos
    var inNombre = document.getElementById("inNombre");
    var inEdad = document.getElementById("inEdad");

    var nombre = inNombre.value; //obtener el contenido de los campos
    var edad = Number(inEdad.value);

    // verificar el ingreso de datos
    if ( nombre == "" || inEdad.value == "" || isNaN(edad))
    {
        alert("Ingrese los datos correctamente");
        inNombre.focus();
        return;
    }

    // agrega los datos al vector de objetos
    criaturas.push({ nombre: nombre, edad: edad });

    // limpiar los campos y posicionar el cursor en inNombre
    inNombre.value = "";
    inEdad.value = "";
    inNombre.focus();

    listarCriaturas(); //llamar function que nos da la lista de criaturas

}

// crear referencia del boton y asocia function al evento click de ese boton
var btAgregar = document.getElementById("btAgregar");
btAgregar.addEventListener("click",agregarCriaturas);

// 

function listarCriaturas()
{
    // verificar si el vector esta vacio
    if ( criaturas.length == 0)
    {
        alert("No hay criaturas en la lista");
        return;
    }
    
    var lista = ""; //para concatenar lista de criaturas

    // recorre los elementos del vector
    for ( var i = 0; i < criaturas.length; i++)
    {
        lista += criaturas[i].nombre + " - " + criaturas[i].edad + " anhos\n";
    }

    // mostrar la lista (en una unica instruccion)
    document.getElementById("outLista").textContent = lista;


}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click",listarCriaturas);

//
function resumirLista()
{
    // verificar si el vector esta vacio
    if (criaturas.length == 0)
    {
        alert("No hay criaturas en la lista");
        return;
    }

    // crear una copia del vector criaturas
    var copia = criaturas.slice();

    // ordena el vector copia por edad
    copia.sort(function(a, b){ return a.edad - b.edad });

    var resumen = ""; //para concatenar la salida

    var aux = copia[0].edad; // menor edad del vector ordenado
    var nombres = []; //vector para agregar nombres de cada edad

    //recorre los elementos del vector (clasificado por edad)
    for ( var i = 0; i < copia.length; i++)
    {
        // si es la misma edad auxiliar, agrega en el vector
        if (copia[i].edad == aux)
        {
            nombres.push(copia[i].nombre);
        }
        else
        {
            // si no, agrega al resumen, datos y nombres agregados en nombres[]
            resumen += aux + " anhos(s): " + nombres.length + " criatura(s) - ";
            resumen += (nombres.length / copia.length * 100).toFixed(2) + "%\n";
            resumen += "(" + nombres.join(", ") + ")\n\n";
            aux = copia[i].edad; //obtiene la nueva edad en orden
            nombres = []; //limpiar el vector de nombres
            nombres.push(copia[i].nombre); //agrega el primero de la nueva edad
        }
    }

    // agrega los nombres de la ultima edad ordenada
    resumen += aux + " anho(s): " + nombres.length + " criatura(s) - ";
    resumen += (nombres.length/copia.length*100).toFixed(2) + "%\n";
    resumen += "(" + nombres.join(", ") + ")\n\n";

    // modificar el contenido de la lista
    document.getElementById("outLista").textContent = resumen;
}

var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click",resumirLista);
