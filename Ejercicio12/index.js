'use strict';

/**
 * CREAR UN PROGRAMA QUE PERMITA INGRESAR LA EDAD Y LOS AÑOS DE TRABAJO .
 * Y VERIFICAR SI ES APTO O NO PARA JUBILARSE.
 * CONSIDERAR QUE LA JUBILACION PERMITE 30 AÑOS DE TRABAJO O SEA MAYOR DE 60 AÑOS.
 */

let age=Number(prompt('Ingrese la edad: '));
let yearsJob = Number(prompt('Ingrese los años de trabajo en la empresa: '))
let message;


if(age >60 || yearsJob >30){
    message = 'Usted es apto para la jubilacion. ';
}else{
    message = 'Usted no es apto para la jubilacion.'
}

alert(message);
