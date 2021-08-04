// var i = 1;
// while(i < 15){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

var numbers = [10, 20, 30, 40, 50];

// for(var i=0; i<numbers.length; i++){
//     var number = numbers[i];
//     if(number > 30){
//         break;
//     }
//     console.log(number);
// }
for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if(number > 30){
        continue;
    }
    console.log(number);
}