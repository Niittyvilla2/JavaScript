'use strict';
let numbers=[];

for (let i=1; i <= 5; i++){
const numstr = prompt('Give number');
const num = parseFloat(numstr);
numbers.push(num);
}

let revnumbers = [];
for (let i = numbers.length -1; i >= 0; i--){
    revnumbers.push(numbers[i])
}
document.querySelector('#target').innerHTML = revnumbers;
