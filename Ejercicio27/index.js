'use strict'; 

//ejercicio 02

function ejercicio2(){
    let nums= [0,2,4,8]
    alert('Ejercicio2 : '+nums)

    for(let i=0;i<nums.length;i++){
        for(let j=0; j<nums.length;j++){
            alert(nums[i]+" "+nums[j]);
        }
    }

}

//ejercicio 03

function ejercicio3(){
    let nums= [0,2,4,8]
    alert('Ejercicio3 : '+nums)

    for(let i=0;i<nums.length;i++){
        for(let j=i+1; j<nums.length;j++){
            alert(nums[i]+" "+nums[j]);
        }
    }
}



ejercicio2();
ejercicio3();