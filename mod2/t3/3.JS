'use strict';
let names = [];
for( let i=0; i<6; i++){
    const name = prompt('Give name of dog');
    names.push(name)
}
names.sort();
names.reverse();
document.querySelector('#target').innerHTML = names;