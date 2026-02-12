'use strict';

function elevarAlCuadrado(num){
    let res=num*num;
    alert('El número '+num+' elevado al cuadrado es = '+res);    
}

let num=Number(prompt('Ingrese un numero: ','0'))
elevarAlCuadrado(num);
