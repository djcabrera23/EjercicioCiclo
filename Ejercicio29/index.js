'use strict'; 

let nums =[5,7,4,9,8];
let aux=0;
alert('array: ['+nums+']')
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        //alert(nums[i]+' - '+nums[j]);
        if(nums[j]>nums[i]){
            aux= nums[i];
            nums[i]=nums[j];
            nums[j]=aux;
        }
    }
}

alert ('Ordenado Desc : ['+nums+']')