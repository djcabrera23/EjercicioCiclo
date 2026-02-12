'use strict';


let vueltas= Number(prompt("Ingrese el numero de vueltas que desea recorrer:"))
console.log('Recorrer '+vueltas+ ' vueltas')
console.log('bucle FOR')
for(let cont =0;cont <vueltas;cont++)
    {
    console.log('vuelta '+(cont+1))
}

console.log('bucle WHILE')
let cont=0;
while(cont<vueltas){
    console.log('vuelta ' + cont+ ' iniciada');
    console.log('vuelta '+(cont+1))
    cont++;
}
