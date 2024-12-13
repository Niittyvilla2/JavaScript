'use strict';
const num1str = prompt('enter a number');
const num1 = parseInt(num1str);

const num2str = prompt('enter a number');
const num2 = parseInt(num2str);

const num3str = prompt('enter a number');
const num3 = parseInt(num3str);

const sum = num1 + num2 + num3;
const avrg = sum / 3;
const prod = num1*num2*num3;

document.querySelector('#target').innerHTML = "Sum: " + sum + " Product: " + prod + " Average: " + avrg;