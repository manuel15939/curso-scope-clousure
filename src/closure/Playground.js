function crearPetList(){
    //constante donde se guarda los elementos
    const petList = [];
    //funcion que contiene la logica 
    function savePet(pet){
        //condicional que permite guardar los elementos en un array o muestra los elemntos del array 
        if(pet){
            petList.push(pet)
        }else{
            return petList
        }
    }
    return savePet
}

const myPetList = crearPetList();
myPetList('michis');
myPetList('firulais')
myPetList()