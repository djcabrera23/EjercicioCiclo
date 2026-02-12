'use strict'

let a= Number(prompt("Ingrese el valor de a "));

let b= Number(prompt("Ingrese el valor de b "));

let mensaje;

// > MAYOR QUE
// < MENOR QUE
// >= MAYOR IGUAL
// <= MENOR QUE
// == IGUAL
// != DIFERENTE

if(a>b){
 mensaje=" a es mayor que b "
}else{
    if(a<b){
        mensaje= "b es mayor que a"
    }else{
        mensaje = "a es igual que b "
    }
}

alert("COMPARACIONES "+"\n"+"a ="+a + "\n"+ "b ="+b+"\n"+"______________________"
    +"\n"
    +mensaje
)

if(a >=0 )
{
 alert("el numero a es POSITIVO " )
}else{
    alert("el numero es NEGATIVO")
}