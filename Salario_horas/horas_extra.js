const contenedor = document.querySelector(".Principal__Contenedor"),
resultado = contenedor.querySelector(".Salario_con_Horas"),
title_salarioYhoras = contenedor.querySelector(".Title_conHoras"),
Numero_Horas = contenedor.querySelector("#Horas_agregar"),
Tipo_de_Horas = contenedor.querySelector("#tipo_horasExtra"),
Salario_usuario = contenedor.querySelector("#salarioEntrada");


function onClickaumentar(){

    Numero_Horas.value = parseInt(Numero_Horas.value) + 1; // aumentamos el valor en el input
}

function onClickdisminuir(){

    Numero_Horas.value = parseInt(Numero_Horas.value) - 1; // disminuimos el valor en input
}

function onClickCalcaularHoras(){
    var valor_Hora_ordinaria = parseInt(Salario_usuario.value) / 240;
    var valor_HExtra=0;
    let recargo=0;

    switch(Tipo_de_Horas.value){
        case 'diurna':
                recargo = valor_Hora_ordinaria * 0.25;
            break;
        case 'nocturna':
            recargo = valor_Hora_ordinaria * 0.75;
            break;
        case 'festivo_diurna':
            recargo = valor_Hora_ordinaria * 1;
            break;
        case 'festivo_nocturna':
            recargo = valor_Hora_ordinaria * 1.5;
            break;
        default:
            break;
    }
    valor_HExtra = valor_Hora_ordinaria + recargo;
    // salario + el valor de las horas multiplicada por el numero de horas realizadas
    let salrioMasHorasExtras = parseInt(Salario_usuario.value) + valor_HExtra * parseInt(Numero_Horas.value); 

    title_salarioYhoras.innerText = "TOTAL A PAGAR CON HORAS EXTRA:"
    let formatoPeso =  String(salrioMasHorasExtras).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')//expresion regular para poner ,
    resultado.innerText = formatoPeso;
}

