function calcularPromocion()
{
    var inProducto = document.getElementById("inProducto");
    var inPrecio = document.getElementById("inPrecio");
    var outProducto = document.getElementById("outProducto");
    var outPrecioTercerProducto = document.getElementById("outPrecioTercerProducto");

    var producto = inProducto.value;
    var precio = Number(inPrecio.value);
    
    var descuento = precio * 0.50;
    var total = (precio*2)+descuento;

    outProducto.textContent = producto + " - Promocion: Lleve 3 por R$: " + total.toFixed(2);
    outPrecioTercerProducto.textContent = "El 3er producto cuesta solo R$: " + descuento.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click",calcularPromocion);