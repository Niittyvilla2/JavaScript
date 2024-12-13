'use strict';
const numstr = prompt('Input a year');
const num = parseInt(numstr);

if (num % 4 == 0) {
    if (num % 100 == 0) {
        if (num % 400 == 0) {
            document.querySelector('#target').innerHTML = "Your year is a leap year";
        }
        else {
            document.querySelector('#target').innerHTML = "Your year is not a leap year";
        }
    }
    else {
        document.querySelector('#target').innerHTML = "Your year is a leap year";
    }
}
else {
    document.querySelector('#target').innerHTML = "Your year is not a leap year";
}