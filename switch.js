var color = 'blue';
if(color == "green"){
    console.log('color is green');
}
else if(color == "red"){
    console.log('color is red');
}
else if(color == "white"){
    console.log('color is white');
}
else if(color == "yellow"){
    console.log('color is yellow');
}
else if(color == "blue"){
    console.log('color is blue');
}
else{
    console.log('you didnot choose any color');
}
//switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('you didnot choose any color');
}