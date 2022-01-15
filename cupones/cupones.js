const contenedor = document.querySelector(".Principal__Contenedor"),
resultado = contenedor.querySelector("#Precio__final"),
title_Antes = contenedor.querySelector(".Title_antes"),
precio_anterior = contenedor.querySelector(".Precio_antes_cupon"),
details = contenedor.querySelector(".detalles_cupon");
var precio;
var producto_agregados_costumers;
var nombre_indicador;
var CuponAplicado;

function constructor(){
    producto_agregados_costumers=[];
    precio=0;
}


function onClickaumentar(indicador) {
    var nombre_producto = ".cantidad_agregar_" + indicador;
    const Cantidad = contenedor.querySelector(nombre_producto);
    Cantidad.value = parseInt(Cantidad.value) + 1; 
}

function onClickdisminuir(indicador){
    var nombre_producto = ".cantidad_agregar_" + indicador;
    const Cantidad = contenedor.querySelector(nombre_producto);
    Cantidad.value = parseInt(Cantidad.value) - 1; 
}

function onClickagregar_produto(indicador){
    nombre_indicador = indicador;
    if(typeof(producto_agregados_costumers) == 'undefined' && typeof(precio) == 'undefined'){ constructor();} // verifico si las variables no han sido inicializadas o no tiene un tipo
    
    var Indicador_Producto = ".precio_"+ indicador;
    const PrecioProducto_Neto = Mis_productos.find(Mi_producto => Mi_producto.name==indicador).precio;
    var Indicador_Producto = ".cantidad_agregar_" + indicador;
    const Cantidad = contenedor.querySelector(Indicador_Producto);

    console.log(PrecioProducto_Neto)
    precio = precio + parseInt(Cantidad.value) * parseInt(PrecioProducto_Neto);
    typeof(CuponAplicado) == 'undefined'? resultado.innerText = precio : descuestoCupon();
    
    classePorIndicador = "resumen_cantidad_" + nombre_indicador;

    if(!producto_agregados_costumers.find(validarIndicador)){
        producto_agregados_costumers.push({nombre:indicador, cantidad:parseInt(Cantidad.value)})
        agregarLineaProducto(Cantidad.value,classePorIndicador);

    }else{

        const cantidad_aumentar_producto = contenedor.querySelector("."+classePorIndicador);
        var cantidadGuardadaProducto = producto_agregados_costumers.find(producto_agregado_costumer => producto_agregado_costumer.nombre==indicador).cantidad;

        var añadirCantidad = cantidadGuardadaProducto + parseInt(Cantidad.value);
        producto_agregados_costumers.find(producto_agregado_costumer => producto_agregado_costumer.nombre==indicador).cantidad = añadirCantidad;    

        cantidad_aumentar_producto.innerText = añadirCantidad;
    }
   
    

}

function agregarLineaProducto(cantidad,classePorIndicador){
    
    const contenedorProducto = document.querySelector(".contenedor_resume_productos");
    let contenedor_resumen = document.createElement('div');
    contenedor_resumen.classList.add("texto__input_resumen");

    let lineaProducto = document.createElement('p');
    lineaProducto.classList.add("nombre__porducto");
    let cantidadProducto = document.createElement('p');
    cantidadProducto.classList.add("cantidad__producto");
    cantidadProducto.classList.add(classePorIndicador);

    lineaProducto.innerText = nombre_indicador;
    cantidadProducto.innerText = cantidad;

    contenedor_resumen.appendChild(lineaProducto);
    contenedor_resumen.appendChild(cantidadProducto);
    
    contenedorProducto.appendChild(contenedor_resumen);
}


const validarIndicador=(produdo_agregado)=>{
    return produdo_agregado.nombre == nombre_indicador;
}


function onClickButtonAplicarCupon() {
    const Micoupon = contenedor.querySelector(".cuponEntrada").value;
    const ValidaCupon = (coupon)=>{
        return coupon.name == Micoupon;
    }
    const CupoUsuario = coupons.find(ValidaCupon /* funcion porque se validara lo que hay en lista*/);
    
    
    if (!CupoUsuario) {
        details.innerText = "El cupón '" + Micoupon + "' no es válido";
    }else{
        if(typeof(CuponAplicado) == 'undefined'){    
            descuento = CupoUsuario.discount;
            CuponAplicado = descuento;
            descuestoCupon();
            details.innerText = "¡Cupon del " +descuento+"% aplicado!"
            title_Antes.innerText = "ANTES:"
        }
        
    }
}

function descuestoCupon(){
    precio_anterior.innerText = precio; 
    var totalConCupon = precio - precio *(CuponAplicado / 100);
    resultado.innerText = totalConCupon;
}