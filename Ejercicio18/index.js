'use strict';

function multiplicarNumeros(num1, num2 ){
    let res=num1*num2;
    return res;
}

let numero1=Number(prompt('Ingrese el primer numero: ','1'));
let numero2=Number(prompt('Ingrese el segundo numero: ','1'));

let resultado=multiplicarNumeros(numero1,numero2);

alert('la multiplicacion de '+numero1+' * '+numero2+' es = '+resultado);
