//function parameter call

function bringsingara(taka){
    console.log('singara jonno diche', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringsingara(money);
console.log('tomar singara hobe', singara +' ta');