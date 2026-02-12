'use strict'; 

function elevado1(a){
    return a*a
}

let elevado2 = function(a){
    return a*a
}

let elevado3 = (a) => a*a;


function parImpar1(a){
    return (a%2 == 0) 
}

let parImpar2 = function(a) {
    return (a%2 == 0) 
}

let parImpar3 = (a) => {
    return (a%2 == 0) 
}

alert('2 elevado a 2 es = '+elevado3(2))
alert('3 es '+parImpar3(3))

let fruits = ['Apple', 'Orange', 'Apple','Orange', 'Lemon', 'Banana']

alert( fruits.includes('Apple') );
alert( fruits.lastIndexOf('apple',1) ); // 2 (last Apple)
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
/*
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
 */
