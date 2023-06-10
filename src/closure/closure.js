function greeting (){
    let name = 'Manuel';
    function displayUserName(){
        return `Hello ${name}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());


