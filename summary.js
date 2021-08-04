var skyColor = 'blue';

var phones = ['oppo', 'iphone', 'samsung', 'htc'];
//check exists in an arry
if(phones.indexOf('walton') == -1){
    console.log('opps! is not here ');
}
//if available
if(phones.indexOf('oppo') != -1){
    console.log('available');
}

//function
function addThreeNumber(num1, num2, num3){
    var total = num1+num2+num3;
    return total;
}
//call
var result = addThreeNumber(10,20,30);
console.log(result);

//object
var potato = {
    price : 100,
    color : 'green',
    brand : 'pran'
}

console.log(potato.price);
//three way
potato.price = 200;

potato['price'] = 400;

var priceProperty = 'price';
potato[priceProperty] = 500;
// console.log(potato)