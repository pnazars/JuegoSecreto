//Desafíos:

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('p','Ingrese altura en CM y Peso en Kg.');

function calculandoIMC() {
    let high = document.getElementById('alturaIngresada');
    let weight = document.getElementById('pesoIngresado');
    let alturaCM = parseInt(high.value)/100;
    let pesoKG = parseInt(weight.value);

    let imc= pesoKG/(alturaCM*alturaCM); 

    asignarTextoElemento('p',`Según la información ingresada, su IMC corresponde a ${imc}`);
    
    return;

}

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.




//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.