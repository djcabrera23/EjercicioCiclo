'use strict'

let numero=Number(prompt('Ingrese el numero que desea ver la tabla de multiplciar.'))
let resultado;
let n=12;
let i=0;
while(i<=n){
    resultado = numero*i;
    alert ('Tabla de multiplicar del '+numero + ': \n'+numero+' x '+ i+ ' = ' +resultado);
    i++;
}