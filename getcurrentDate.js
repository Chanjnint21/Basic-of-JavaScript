
//Using json style 1
let date = new Date().toJSON().slice(0, 10); //0, 10 get the first ten char like output
console.log(date);
//output : yyyy-mm-dd

//Using json style 2
let Date = new Date().toJSON(); //this method get the whole information
console.log(Date); 
//Output 2022-10-26T09:52:21.845Z


//method 2
const event = new Date();

const years = {  year: 'numeric'};
const months = { month: 'short' };
const days = { day: 'numeric' };


const year = event.toLocaleDateString('en-Us', years);
const month = event.toLocaleDateString('en-Us', months);
const day = event.toLocaleDateString('en-Us', days); //en-Us English Format 

console.log(day + "/" + month + "/" + year); 
//Output: DD/MM/YY


// In case you only want the month

console.log(event.toLocaleDateString(undefined, { month: 'short'})); 
//output: Oct
console.log(event.toLocaleDateString(undefined, { month: 'long'})); 
//output: October


