//usando el modo estricto es obligatorio declarar las variables

'use strict';
pi = 3.1416;
console.log(pi);

function myFunction (){
    return pi = 3.1416
}

console.log(myFunction());

function myFunction2 (){
    'use strict';
    return pi = 3.1416
}

console.log(myFunction2());