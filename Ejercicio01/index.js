"use strict";
alert ("Hello , world");
 let mensaje; //declarar variable
mensaje ="Este es un mensaje para probar la palabra reservada let"; //asignar valor a la variable
alert (mensaje);

let suma; //declarar varaible numerica
suma = 5+2; //asignar un valor numerico a la variable

let disp; //declarar variable tipo boolean
disp = suma > 6; //asignar el valor (true o false) a la varible si cumple la condicion

alert ("El resultado es igual a = " + suma + " y la disponibilidad es "+disp); //muestro en pantalla


let age = 2025-1994;
alert ("La edad es de "+age + "años")

let confirmacion = confirm("Entendiste la clase?") 

if(confirmacion == true ){
    alert("muy bien!!");
}
else {
    alert("Hay que repasar mas.");
}
