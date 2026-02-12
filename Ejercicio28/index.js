'use strict'; 

let nums= [4,9,6,2]

function burbuja(){
    let aux=0;
    alert('Array desordenado: '+nums)
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]<nums[j]){
                aux=nums[j];
                nums[j]=nums[i];
                nums[i]=aux;
            }
        }
    }
    alert('Ordenado: [ '+nums+' ]')
}

burbuja()
