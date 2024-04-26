function verPromocion()
{
    // crear las referencias
    var inMedicamento = document.getElementById("inMedicamento");
    var inPrecio = document.getElementById("inPrecio");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocion = document.getElementById("outPromocion");

    // obtener los datos
    var medicamento = inMedicamento.value;
    var precio = Number(inPrecio.value);

    // calcular promocion
    var promocion = Math.floor(precio*2);

    // mostrar los resultados
    outMedicamento.textContent = "Promocion de " + medicamento;
    outPromocion.textContent = "Lleve 2 por solo R$: " + promocion.toFixed(2);
}

// crear referencia con el boton asociado
var btCalcular = document.getElementById("btCalcular");
// registra un evento a ese boton
btCalcular.addEventListener("click",verPromocion);