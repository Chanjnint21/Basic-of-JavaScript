// create a variable of my age
const myAge = 10;

//with *=
// let earlyYears = 2;
// earlyYears *= 10.5;
// let laterYears = myAge - 2;
// laterYears *= 4;

//without *=
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
laterYears = laterYears *  4;

//check the value
console.log(earlyYears)
console.log(laterYears)

//Dog years
let myAgeInDogYears = earlyYears + laterYears;

//put name and make it to lowercase
let myName = 'Jnint'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} yearss old in dog yearss.`)
