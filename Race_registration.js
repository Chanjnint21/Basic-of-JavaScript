//Random pick the race number for runner
let raceNumber = Math.floor(Math.random() * 1000);

// true = registered early and false = registered late
let registered = false;

//Runner registered age
let runnerAge = 18;

//if runner
if (runnerAge > 18 && registered === true){
  raceNumber += 1000;
}
if (runnerAge > 18 && registered === true){
  console.log(`Number ${raceNumber}. Race at 9:30 am.`);
} 

//if runner age more than 18 y.o and registered late
else if (runnerAge > 18 && registered === false){
  console.log(`Number ${raceNumber}. Race at 11:30 am.`);
} 

//if runner age less than 18 y.o
else if (runnerAge < 18) {
  console.log(`Number ${raceNumber}. Race at 12:30pm.`);
} 

//if runner exactly 18 y.o
else{
  console.log(`Plz go and see the regisration desk.`)
}
