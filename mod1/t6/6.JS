'use strict';
let answer = confirm("Should I calculate the square root?");

if (answer == true) {
    const numstr = prompt('Give number');
    const num = parseFloat(numstr);
    
    if (num >= 0){
        const square = Math.sqrt(num);
        document.querySelector('#target').innerHTML = square;
    }

    else{
        document.querySelector('#target').innerHTML = "The square root of a negative number is not defined";
    }
}

if (answer == false) {
    document.querySelector('#target').innerHTML = "The square root is not calculated.";
}
