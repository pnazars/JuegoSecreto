let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromaximo = 5;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario');
    //en el curso escriben esta función de la siguiente manera: let numeroDeUsuario = document.getElementById('valorUsuario').value; pero a mi no me funciona, sale error en consola.
    let resultadoUsuario = parseInt(numeroDeUsuario.value);
    // console.log(numeroSecreto); si necesito revisar el número secreto
    console.log(resultadoUsuario);
    console.log(typeof(resultadoUsuario));
    console.log(typeof(numeroSecreto));
    console.log(resultadoUsuario === numeroSecreto);

    console.log('lleva '+intentos+' intentos.');
    if(resultadoUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if(resultadoUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    let valorCaja= document.querySelector('#valorUsuario')
    valorCaja.value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeromaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');


    } else{

    //Si el número generado está incluído en la lista

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }     
}
 
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto :)');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeromaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarjuego(){
   // location.reload();  es como hacer F5

   //Limpiar la caja  
    limpiarcaja();

    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();

    //deshabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
//Con la función asignartextoelemento se edita el elemento u objeto que nos interesa en HTML, asignando el texto que nos interesa, como se hace al final, previo a esta frase.

