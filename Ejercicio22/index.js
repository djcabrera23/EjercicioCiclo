'use strict';


/*
crear una funcion que reciba como parametro el numero 
de elementos de un array que permita ingresar al usuario 
uno a uno los elementos.
la funcion debe devolver el array resultante 
*/


function agregarElemArray(size){
    let elements = [];
    for(let i=0; i<size;i++){
        let item= Number(prompt('Ingresar el elemento N°'+(i+1)));
        elements.push(item);
    }
    return elements;
}

let size=Number(prompt('Ingrese el tamaño del array: '));
let arrFinal =agregarElemArray(size);

alert('ARRAY [ '+arrFinal+' ]');







