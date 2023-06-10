//el hoisting eleva la variable y la declara pero le asigna por defecto undefined
console.log(nameOfDog); // undefined
var nameOfDog = 'Elmo';
console.log(nameOfDog); // Elmo

// el hoistin primero eleva las variables y las declara
// despues ejecuta la funcion pero como no esta antes la busca y luego la ejecuta
nameOfCat()
function nameOfCat (){
    console.log(`El mejor gato se llama ${nameCat}`);
}

var nameCat = 'Michis'
