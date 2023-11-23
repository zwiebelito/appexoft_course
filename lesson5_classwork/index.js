/*let a = 6;

a=8;

console.log(a);

let b = 7;

let c = 10;

console.log(c, 'c')*/

/*let day = prompt("Enter day of week")
console.log(day)*/

//let number = +prompt("Enter number")
/*console.log(number+10, "result");*/

/*if (number > 10) {
    console.log('number > 10')
} else {
    console.log('number < 10')
}*/

/*
switch (number){
    case number > 10:
        console.log('number > 10');
        break;
    case number < 10:
        console.log('number < 10');
        break;
    default:
        console.log('number = 10')
}*/

// number === 10 && console.log('number')

/*function volume (width, height, length) {
    return width*height*length
}

console.log(volume(10, 10, 10), 'result')*/

/*
function volume (...arguments){
    if (arguments.length === 2){
        return arguments[0] * arguments[1]
    }
    if (arguments.length ===3){
        return arguments[0] * arguments[1]* arguments[2]
    }
}

console.log(volume(10, 10), 'result')
*/


/*
const volume = function (...arguments){
    if (arguments.length === 2){
        return arguments[0] * arguments[1]
    }
    if (arguments.length ===3){
        return arguments[0] * arguments[1]* arguments[2]
    }
}
*/

/*const volume = (...arguments) => {
    if (arguments.length === 2){
        return arguments[0] * arguments[1]
    }
    if (arguments.length ===3){
        return arguments[0] * arguments[1]* arguments[2]
    }
}*/

/*
(function (){
    console.log('qwerty')
})()
*/


// console.log(volume(10, 10), 'result')

const array = [1,2,3,4,5];

const fullName = {
    firstname: 'tsybulenko',
    surname: 'ihor',
    age: 22
}

for (const name in fullName) {
    console.log(fullName[name])
}