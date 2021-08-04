// Two number add function
function addTwoNumber(num1, num2){
    console.log(num1, num2);
    var total = num1 + num2;
    return total;
}
var firstNumber = 20;
var secondNumber = 20;
var result = addTwoNumber(firstNumber, secondNumber);
console.log('add result', result);

//Two number substraction
function subTwoNumber(number1, number2){
    var total = number1 - number2;
    return total;
}
var subResult = subTwoNumber(50, 25);
console.log('sub result', subResult);

//multiplication number
function multiplicationTwoNumber(nums1, nums2){
    var total = nums1 * nums2;
    return total;
}
var multiplicationResult = multiplicationTwoNumber(10, 10);
console.log('multiplication result', multiplicationResult);
