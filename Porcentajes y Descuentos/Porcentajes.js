const contenedor = document.querySelector(".Principal__Contenedor"),
resultado = contenedor.querySelector("#Texto__resultadoDescuento");

function onClickButtonPrecioDescuento() {
    PrecioOriginal = contenedor.querySelector(".precioEntrada").value;
    Descuento = contenedor.querySelector(".descuentoEntrada").value;

    var totalConDescuento = CalcularPrecioConDescuento(PrecioOriginal,Descuento);

    resultado.innerText = "Su valor real con descuento : $" + totalConDescuento;
}

function CalcularPrecioConDescuento(precio,descuento) {
    var porcentajeDescuento = precio * (descuento / 100);
    var precioConDescuento = precio - porcentajeDescuento;

    return precioConDescuento;
}