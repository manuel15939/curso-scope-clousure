function moneyBox (){
   //variable que se actualiza cuando se ejecuta counCoins
    let saveCoins = 0
    // funcion que permite sumar los coins
    function countCoins(coin){
        // se suma las coins con el valor guardado en savecoins
        saveCoins += coin
        // se retorna el nuevo valor de savecoins
        return saveCoins
    }
    return countCoins
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

const moneyBoxMariana = moneyBox();
moneyBoxMariana(15);
moneyBoxMariana(20);
moneyBoxMariana(35);
