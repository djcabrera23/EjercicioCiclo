'use strict'

let cantidadP= Number(prompt('Cantidad de productos: '));

let precio =Number (prompt('Precio de producto: '));

let total= cantidadP*precio;

if(total <20){
    total=total+1;
}

alert ("El total a pagar es $"+total);

