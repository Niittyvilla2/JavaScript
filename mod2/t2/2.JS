'use strict';
const numstr = prompt('Give number of names');
const num = parseFloat(numstr);
let names = [];
for( let i=0; i<num; i++){
    const name = prompt('Give nname');
    names.push(name)
}
names.sort()
document.querySelector('#target').innerHTML = names;