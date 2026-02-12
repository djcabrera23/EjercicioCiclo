'use strict';


/**
 * UNA EMPRESA NECESITA CONTRATAR PERSONAL Y LA CONDICION ES QUE SEA MAYOR A 18 Y MENOR A 65.
 * CREAR UN PROGRAMA QUE INGRESANDO SU EDAD VALIDE SI ES APTO O NO.
 */


let age=Number(prompt('Ingrese la edad para aplicar al empleo: '));
let message;

if(age > 5 && age < 65){
    message = 'Usted es apto para el empleo ';
}else{
    message = 'Usted no es apto para el empleo'
}

alert(message);


