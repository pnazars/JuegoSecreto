//Desafíos:

// 1.- Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo() {
    console.log('¡Hola, mundo!');
    return;
}

saludo();

// 2.- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludoEspecial() {
    let name = document.getElementById('nombreIngresado');
    let nombre= name.value;
    console.log('¡Hola, '+nombre+'!');
    return;
}

// 3.- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function doblenumero() {
    let number = document.getElementById('numero1Ingresado');
    let numero= parseInt(number.value);
    console.log(numero*2);
    return;
}

// 4.- Crear una función que reciba tres números como parámetros y devuelva su promedio.

function variosnumeros() {
    let number1 = document.getElementById('numero1Ingresado');
    let number2 = document.getElementById('numero2Ingresado');
    let number3 = document.getElementById('numero3Ingresado');
    let numero1 = parseInt(number1.value);
    let numero2 = parseInt(number2.value);
    let numero3 = parseInt(number3.value);
    console.log((numero1+numero2+numero3)/3);
    return;


}
// 5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function dosnumeros() {
    let number1 = document.getElementById('numero1Ingresado');
    let number2 = document.getElementById('numero2Ingresado');
    let numero1 = parseInt(number1.value);
    let numero2 = parseInt(number2.value);
    console.log(Math.max(numero1,numero2));
    return;


}

// 6.- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function dosvecesnumero() {
    let number = document.getElementById('numero1Ingresado');
    let numero= parseInt(number.value);
    console.log(numero*numero);
    return;
}
