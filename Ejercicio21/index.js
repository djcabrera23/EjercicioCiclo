'use strict';

function showArray(nums){
    let contador=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            //alert('Posicion: '+i+' elemento: '+nums[i]);
            contador++;
        }
    }
    return contador;
}

let nums = [0,1,0,1,0,1,1,0,0,0,1,0,1,0,1];
let cont;
cont=showArray(nums);

alert('['+nums+'] '+'Cantida de numeros 1 es: '+cont)
