// declara el vector de ambito global que va contener los numeros ya apostados
var errores = [];

// genera un numero aleatorio entre 1 y 100
var sorteado = Math.floor(Math.random()*100) +1;

// declara constante con un numero de chances
const CHANCES = 6;

function apostarNumero()
{
    // crear referencia al campo de entrada y obtiene el contenido
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    // valida el numero
    if (numero <= 0 || numero > 100 || isNaN(numero))
    {
        alert("Ingrese un numero valido...");
        inNumero.focus();
        return;
    }

    // referencia espacios de las salidas de datos
    var outPista = document.getElementById("outPista");
    var outErrores = document.getElementById("outErrores");
    var outChances = document.getElementById("outChances");

    // si la apuesta del jugador sea igual al numero sorteado
    if (numero == sorteado)
    {
        alert("Felicidades!! Acertaste");
        // cambiar el estado de los botones
        btApostar.disabled = true;
        btJugar.className = "exibe";
        outPista.textContent = "Felicidades!! Numero sorteado: " + sorteado;
    }
    else
    {
        // si el numero existe en el vector errores
        if (errores.indexOf(numero) >=0)
        {
            alert("Ya apostaste el numero " + numero + ". Intenta otro...");
        }
        else
        {
            errores.push(numero); //agrega el numero al vector
            var numErrores = errores.length; //obtiene el tamanho del vector
            var numChances = CHANCES - numErrores; //calcula el nro de chances
            // muestra el nro de errores, contenido del vector y nro de chances
            outErrores.textContent = numErrores + " (" + errores.join(", ") + ")";
            outChances.textContent = numChances;

            if (numChances == 0)
            {
                alert("Tus chances terminaron...");
                btApostar.disabled = true;
                btJugar.className = "exibe";
                outPista.textContent = "Game Over!! Numero sorteado: " + sorteado;
            }
            else
            {
                // usa el operador ternario (condicional) para el mensaje de la pista
                var pista = numero < sorteado ? "mayor": "menor";
                outPista.textContent = "Pista: Intenta un numero " + pista + " que " + numero;
            }
        }
    }
    // limpia el campo de entrada y posiciona el cursor en este campo
    inNumero.value="";
    inNumero.focus();
}

function jugarNuevamente()
{
    location.reload();//actualiza la pagina
}

var btApostar = document.getElementById("btApostar");

var btJugar = document.getElementById("btJugar");


btApostar.addEventListener("click",apostarNumero);

btJugar.addEventListener("click",jugarNuevamente);