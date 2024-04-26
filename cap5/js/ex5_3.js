var autos = []; //declarar el vector global

function agregarAutos()
{
    // crear referencia a los elementos que contienen los datos de entrada
    var inModelo = document.getElementById("inModelo");
    var inPrecio = document.getElementById("inPrecio");

    var modelo = inModelo.value; //obtener el contenido de los campos
    var precio = Number(inPrecio.value);

    // verificar el ingreso de los campos
    if ( modelo == "" || precio == 0 || isNaN(precio))
    {
        alert("Ingrese los datos correctamente");
        inModelo.focus();
        return;
    }

    // agregar datos al vector de objetos
    autos.push({ modelo: modelo, precio: precio });

    // limpiar los campos y posiciona el cursor inModelo
    inModelo.value = "";
    inPrecio.value = "";
    inModelo.focus();

    listarAutos(); //llamar function que lista los autos
}

function listarAutos()
{
    // verificar si el vector esta vacio
    if ( autos.length == 0)
    {
        alert("No hay autos en la lista");
        return;
    }

    var lista = ""; //para concatenar lista de autos

    // recorre los elementos del vector
    for ( var i = 0; i < autos.length; i++)
    {
        // agrega a la lista, cada objeto del vector
        lista += autos[i].modelo + " - R$: " + autos[i].precio.toFixed(2) + "\n";
    }

    // referencia el elemento y modifica el contenido mostrado
    document.getElementById("outLista").textContent = lista;
}

function filtrarAutos()
{
    // realiza la lectura del valor maximo a partir del metodo prompt
    var maximo = Number(prompt("Cual es el valor maximo que el cliente desea pagar?"));

    // si no ingreso o es un contenido invalido
    if ( maximo == 0 || isNaN(maximo))
    {
        return; //...retorna
    }

    // para concatenar lista de autos que obedecen al criterio de busqueda/filtro
    var lista = "";

    // recorre todos los elementos del vector
    for ( var i = 0; i < autos.length; i++)
    {
        // verifica si el precio es inferior o igual al maximo
        if ( autos[i].precio <= maximo)
        {
            lista += autos[i].modelo + " - R$: " + autos[i].precio.toFixed(2) + "\n";
        }
    }

    var outLista = document.getElementById("outLista"); //crea la referencia a outLista

    // si la lista esta vacia, significa que ningun auto fue encontrado en el bucle for
    if ( lista == "")
    {
        outLista.textContent = "No hay autos con el precio hasta R$ " + maximo.toFixed(2);
    }
    else
    {
        // si no, mostrar los autos obtenidos
        outLista.textContent = "Autos hasta R$ " + maximo.toFixed(2) + "\n-----------------------------\n" + lista;
    }
}

// crear referencia a los botones y asociar function al evento click de ese boton
var btAgregar = document.getElementById("btAgregar");

var btListar = document.getElementById("btListar");

var btFiltrar = document.getElementById("btFiltrar");

btAgregar.addEventListener("click",agregarAutos);

btListar.addEventListener("click",listarAutos);

btFiltrar.addEventListener("click",filtrarAutos);