function verPromocion()
{
    // crear referencias de los elementos utilizados en el programa
    var inVehiculo = document.getElementById("inVehiculo");
    var inPrecio = document.getElementById("inPrecio");
    var outVehiculo = document.getElementById("outVehiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outCuota = document.getElementById("outCuota");

    // obtener el contenido de los campos de entrada
    var vehiculo = inVehiculo.value;
    var precio = Number(inPrecio.value);

    // calcular valor de la entrada y de las cuotas
    var entrada = precio * 0.50;
    var cuota = (precio * 0.50 )/12;

    // modificar el contenido de los parrafos de respuesta
    outVehiculo.textContent = "Promocion: " + vehiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outCuota.textContent = "+12x de R$: " + cuota.toFixed(2);
}
// crear una referencia al elemento btVerPromocion (boton)
var btVerPromocion = document.getElementById("btVerPromocion");
// registra un evento asociado al boton, para cargar la funcion
btVerPromocion.addEventListener("click",verPromocion);