'use strict'; 

let phone = "0877852635";

//sumar en 1 cada elemento del telefono, desde la posicion 1 en adelante 

let numbersPhone = phone.split('');

alert('Telefono: '+numbersPhone+'  '+typeof(numbersPhone));

let numberWithoutZero= numbersPhone.slice(1,numbersPhone.length)

alert('Telefono: '+numberWithoutZero+'  '+typeof(numberWithoutZero))

let numbersConvert = numberWithoutZero.map(item => Number(item))

alert (numbersConvert+'-'+typeof(numbersConvert[0])+'-'+typeof(numbersConvert))

let numbersSum1 = numbersWithoutZero.map (item => item+1)

alert('Phone +1 : '+numbersSum1+'  '+typeof(numbersSum1))

let zero = phone.slice(0,1)

alert('Cero ' + zero+'  '+typeof(zero));

let phoneString = zero.concat(',',numbersSum1);

alert("PhoneWith, : "+phoneString+'  '+typeof(phoneString))

let newPhoneArray = phoneString.split(',');

alert('Phone Array: '+newPhoneArray+'  '+typeof(newPhoneArray))

let newPhone = newPhoneArray.join('');

alert(newPhone+'  '+typeof(newPhone))