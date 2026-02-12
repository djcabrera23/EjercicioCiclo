'use strict'

let totalKms = Number(prompt('Ingrese el numero de kilometros: '));

const precioporKm =0.25;

const arranque= 0.55;

let valor= (totalKms*precioporKm)+arranque;

if(valor < 1.5){
    valor = 1.5;   
}

alert ("El total a pagar es $"+valor);
