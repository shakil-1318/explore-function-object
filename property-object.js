var laptop = {
    brand : 'hp',
    price : 22000,
    storage : '56gb',
    processor : 'intel i5',
    color : 'black'
}
console.log(laptop);
console.log(typeof laptop);
console.log(laptop.processor);
var laptopPrice = laptop.price;
console.log(laptopPrice);
//set a value
laptop['price'] = 10000;
// console.log(laptop)

//difference ways to set a value of an object property 
var priceProperty = 'price'
laptop.price = 5000;//one way to set value
laptop['price'] = 7000;//second way to set value
laptop[priceProperty] = 50000;//third way to set value
console.log(laptop)

var storageProperty = 'storage';
laptop[storageProperty] = '1tb';
console.log(laptop)

//so, in this video we will learn, how to see value of an object value and how to set a value of an object property..
