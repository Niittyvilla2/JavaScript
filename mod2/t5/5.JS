'use strict';
let numbers = [];
let check = true;
while (check = true) {
    const numstr = prompt('Give number');
    const num = parseFloat(numstr);1
    if (numbers.includes(num) == true) {
        numbers.push(num);
        break;
    }
    numbers.push(num);
}
numbers.reverse()
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}