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
    var nombre_producto = ".cantidad_agregar_" + indicador; //usamos el indicador para diferenciar cada producto y hacer su respectivo llamado de clase
    const Cantidad = contenedor.querySelector(nombre_producto);
    Cantidad.value = parseInt(Cantidad.value) + 1; // aumentamos el valor en el input
}

function onClickdisminuir(indicador){
    var nombre_producto = ".cantidad_agregar_" + indicador;
    const Cantidad = contenedor.querySelector(nombre_producto);
    Cantidad.value = parseInt(Cantidad.value) - 1; // disminuimos el valor en input
}

function onClickagregar_produto(indicador){
    nombre_indicador = indicador;
    if(typeof(producto_agregados_costumers) == 'undefined' && typeof(precio) == 'undefined'){ constructor();} // verifico si las variables no han sido inicializadas o no tiene un tipo
    
    var Indicador_Producto = ".precio_"+ indicador;
    const PrecioProducto_Neto = Mis_productos.find(Mi_producto => Mi_producto.name==indicador).precio; // traigo el precio guardado en la lista de productos
    var Indicador_Producto = ".cantidad_agregar_" + indicador;
    const Cantidad = contenedor.querySelector(Indicador_Producto);

    console.log(PrecioProducto_Neto)
    precio = precio + parseInt(Cantidad.value) * parseInt(PrecioProducto_Neto); // guardo en precio los valores que se van agregando
    typeof(CuponAplicado) == 'undefined'? resultado.innerText = precio : descuestoCupon(); //se pregunata si existe algun cupon usado ya por el usuario? 
    
    classePorIndicador = "resumen_cantidad_" + nombre_indicador;

    if(!producto_agregados_costumers.find(validarIndicador)){ // si el usuario no ha añadido un producto diferente
        producto_agregados_costumers.push({nombre:indicador, cantidad:parseInt(Cantidad.value)}) // se añade a la lista de productos del usuario y su cantidad
        agregarLineaProducto(Cantidad.value,classePorIndicador); // y se añade una nueva linea al html

    }else{
        // si ya añadio un producto existente solo se aumenta la cantidad
        const cantidad_aumentar_producto = contenedor.querySelector("."+classePorIndicador);
        var cantidadGuardadaProducto = producto_agregados_costumers.find(producto_agregado_costumer => producto_agregado_costumer.nombre==indicador).cantidad;

        var añadirCantidad = cantidadGuardadaProducto + parseInt(Cantidad.value);
        // se trae la cantidad momentania del producto y se modifica
        producto_agregados_costumers.find(producto_agregado_costumer => producto_agregado_costumer.nombre==indicador).cantidad = añadirCantidad;    

        cantidad_aumentar_producto.innerText = añadirCantidad;
    }
   
    

}

function agregarLineaProducto(cantidad,classePorIndicador){ // funcion para agregar div en el html
    
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

// se valida si ese producto ya lo tenia
const validarIndicador=(produdo_agregado)=>{
    return produdo_agregado.nombre == nombre_indicador;
}


function onClickButtonAplicarCupon() {
    const Micoupon = contenedor.querySelector(".cuponEntrada").value;// Se consigue el cupon introduccido
    // se valida si existe 
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

function descuestoCupon(){ //se hace el descuento con cupon y se muestra en pantalla
    precio_anterior.innerText = precio; 
    var totalConCupon = precio - precio *(CuponAplicado / 100);
    resultado.innerText = totalConCupon;
}