'use strict';

let cucharadas =0;
let aceptar;

do {    
    aceptar = confirm('Desea otra cucharada mas de azucar? ')
    cucharadas ++;

}while (aceptar!=false);
alert ('Se han agregado '+cucharadas+' cucharadas de azúcar al café.')

/*


let opcion;
do {    
    opcion= Number(prompt('Desea otra cucharada mas de azúcar? '
     + '\n 1. SI \n 2. NO \n Ingrese opcion: '   
    ));
    if(opcion !=1)break

}while (opcion!=2);
*/


