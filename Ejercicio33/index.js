'use strict'

//const pharse = "Hola Mundo";

//alert(pharse.substring(2,6));

/**
crear una funcion que reciba un string como argumento,
y devuelva el indice del espacio separado.
el string debe tener una frase de 2 palabras 
**/

function findSpaceWithFor(frase){
    let space=-1;
    for(let i=0;i<frase.length;i++){
        if(frase[i]==" "){
            space = i;
            break;
        }
    }
    return space;
}

const frase = String(prompt("Ingrese una frase: "));
let index=findSpaceWithFor(frase);
if(index != -1){
    alert("El espacio se encuentra en la posicion : "+index);
    let primeraPalabra = frase.substring(0,index);
    let segundaPalabra = frase.substring(index+1,frase.length);

    alert("primera palabra: " + primeraPalabra +" \n "+ "segunda palabra: "+segundaPalabra)
}else{
    alert("La frase ingresada no contiene un espacio!! ")
}

