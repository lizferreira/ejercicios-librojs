var pacientes = []; //declara el vector global

function agregarPaciente()
{
    // crear referencia de los elementos de entrada y salida de datos de la pagina
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nombre = inPaciente.value; //obtiene el nombre del paciente

    // verifica el ingreso del nombre del paciente
    if(nombre == "")
    {
        alert("Ingrese el nombre del paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nombre); //agrega el nombre al final del vector

    var lista = "";//string para concatenar pacientes

    // recorre los elementos del vector
    for (i = 0; i < pacientes.length; i++)
    {
        lista += (i + 1) + ". " + pacientes[i] + "\n"; //lista = lista + pacientes [i];
    }

    // altera el contenido de la tag outLista
    outLista.textContent = lista;

    // limpia el campo y posiciona el cursor en inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}

function agregarUrgencia()
{
    // crear referencia de los elementos de entrada y salida de datos de la pagina
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nombre = inPaciente.value; //obtiene el nombre del paciente

    // verifica el ingreso del nombre del paciente
    if(nombre=="")
    {
        alert("Ingrese el nombre del paciente");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nombre); //agrega el nombre al inicio del vector

    var lista = "";//string para concatenar pacientes

    // recorre los elementos del vector
    for (i = 0; i< pacientes.length; i++)
    {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    // altera el contenido de la tag outLista
    outLista.textContent = lista;

    // limpia el campo y posiciona el cursor en inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}

function atenderPaciente()
{
    // verifica si el vector pacientes esta vacio
    if(pacientes.length == 0)
    {
        alert("No hay pacientes en la lista de espera");
        inPaciente.focus();
        return;
    }

    // crear referencia los elementos de salida de datos
    var outAtencion = document.getElementById("outAtencion");
    var outLista = document.getElementById("outLista");

    // elimina paciente al inicio de la fila (y obtiene el nombre)
    var atender = pacientes.shift();
    // muestra el nombre del paciente
    outAtencion.textContent = atender;

    // string para concatenar pacientes
    var lista = "";

    // recorre los elementos del vector
    for (i = 0; i < pacientes.length; i++)
    {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    // altera el contenido de la etiqueta outLista
    outLista.textContent = lista;
}

// crea referencia al boton btAgregar y asocia function al evento click 
var btAgregar = document.getElementById("btAgregar");

var btUrgencia = document.getElementById("btUrgencia");

var btAtender = document.getElementById("btAtender");


btAgregar.addEventListener("click", agregarPaciente);

btUrgencia.addEventListener("click",agregarUrgencia);

btAtender.addEventListener("click",atenderPaciente);