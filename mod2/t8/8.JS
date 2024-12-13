'use strict';
let names = ["Johnny", "DeeDee", "Joey", "Marky"];
function concat(names){
    let list = names[0]+names[1]+names[2]+names[3];
    document.querySelector('#target').innerHTML = list;
}
concat(names);

