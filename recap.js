var favouriteBook = 'hello hydrogen';

//array
var bookList = ['hello', 'geloo', 'bello', 'jello'];
var shoeIndex = bookList.indexOf('bello');
bookList[1] = 'durr hoo gello';

bookList.push('ami astechi');
bookList.pop();
bookList.shift();
bookList.unshift('kmn');

//conditional
if(bookList[1] == 'gello'){
    console.log('I am here boss');
}
else{
    console.log('sorry boss you are walking wrong path..');
}

//while loop
var i=0; //loop variable
while(i<15){
    console.log(i);
    console.log('looping loppinyt');
    i++
}

//for loop
for (let i = 0; i < 15; i++) {
    const element = [i];
    console.log(element)
    
}
