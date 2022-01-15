const contenedor = document.querySelector(".contenedor_figuras"),
radio = contenedor.querySelector("#radio_circulo"),//obteniendo varibales circulo
btnCircleP = contenedor.querySelector("#perimetro_circulo"),
btnCircleA = contenedor.querySelector("#area_circulo"),
salidaCircle = contenedor.querySelector(".Salida_circulo"),
l1Triangle = contenedor.querySelector("#lado1_triangulo"),// obteniendo variables del triangulo
l2Triangle = contenedor.querySelector("#lado2_triangulo"),
l3Triangle = contenedor.querySelector("#lado3_triangulo"),
btnTriangleP = contenedor.querySelector("#perimetro_triangulo"),
btnTriangleA = contenedor.querySelector("#area_triangulo"),
salidaTriangle = contenedor.querySelector(".Salida_triangulo")
l1Square = contenedor.querySelector("#lado_rectangulo"), // obteniendo variables rectangulo
l2Square = contenedor.querySelector("#lado2_rectangulo"),
btnSquareP = contenedor.querySelector("#perimetro_rectangulo"),
btnSquareA = contenedor.querySelector("#area_rectangulo"),
salidaSquare = contenedor.querySelector(".Salida_rectangulo");



const Perimetro_circulo=()=>{
    var pi = Math.PI;
    const perimetro = 2* pi* parseInt(radio.value);
    salidaCircle.value = perimetro;
}

const Area_circulo =() =>{
    var pi = Math.PI;
    const area = 2* pi* Math.pow(parseInt(radio.value),2);
    salidaCircle.value = area;
}

const Perimetro_triangulo=()=>{
    const perimetro = parseInt(l1Triangle.value) + parseInt(l2Triangle.value) + parseInt(l3Triangle.value);
    salidaTriangle.value=perimetro;
    return(perimetro)
}

const Area_triangulo=()=>{
    if(l1Triangle != l2Triangle && l1Triangle!=l3Triangle && l2Triangle!=l3Triangle){
        var sp = Perimetro_triangulo()/2;
        rest1 = sp - parseInt(l1Triangle.value);
        rest2 = sp - parseInt(l2Triangle.value);
        rest3 = sp - parseInt(l3Triangle.value);
        console.log(sp)
        const area = Math.sqrt(sp*(rest1*rest2*rest3))
        salidaTriangle.value=area;
        return;
    }
    var altura = Math.sqrt(Math.pow(parseInt(l1Triangle.value),2)-Math.pow(parseInt(l3Triangle.value)/2,2))
    const area = (parseInt(l3Triangle.value)*altura)/2;
    salidaTriangle.value=area;
    
}

const Perimetro_rectangulo=()=>{
    const perimetro = parseInt(l1Square.value)*2 + parseInt(l2Square.value)*2;
    salidaSquare.value = perimetro
}

const Area_rectangulo=()=>{
    const area = parseInt(l1Square.value)* parseInt(l2Square.value);
    salidaSquare.value = area;
}