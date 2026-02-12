'use strict';

/**
ESCRIBIR UN PROGRAMA QUE VALIDE SI UNA PERSONA PUEDE OBTENER UNA VACUNA
CONSIDERANDO SU EDA. LA POLITICA DICE QUE LOS NIÑOS MENORES DE 5 AÑOS 
Y LOS ADULTOS MAYORES DE 65 SON LOS FAVORECIDOSSOLICITAR LA EDAD AL 
USUARIO Y MOSTRAR EL MENSAJE DE FAVORECIDO O NO
**/

let age = Number(prompt('Ingrese la edad:'));
let message;

if(age < 5 || age >65){
    message = 'Usted a sido favorecido para obtener la vacuna!!! ';
}else{
    message = 'Usted no aplica para la vacuna del coronavirus.'
}

alert(message);


