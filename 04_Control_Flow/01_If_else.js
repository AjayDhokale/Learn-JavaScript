// if else Statement

const isUserLoggedIn = false

// if(isUserLoggedIn == true){
//     console.log("User is logged in....");
// }else{
//     console.log("User is not Logged in...");
// }

//----------------------------------------- Method 1 ---------------------------------------


const temperature = 45

// if (temperature <= 40){
//     console.log("Temperature is less than 40  ");
// } else {
//     console.log("Temperature is above the 40 ");   
// }


//----------------------------------------- Method 2 ---------------------------------------


//comparison Operators
// <, >, <=, >=, ==, !=, ===, !==

const score = 200
// if (score >= 100) {
//     let power = "fly"
//     console.log(`score is ${score} and the power is ${power}`);
// }
// console.log(`score is ${score} and the power is ${power}`);


//----------------------------------------- Method 3 ---------------------------------------


const balance = 1000

//if(balance >= 500) console.log("balance is greter than 500"),console.log("balance is less than 500");               /// this method is not used in MNC company 


// if (balance <= 500) {
//     console.log("Balance is Less than 500");
// }else if (balance <= 700) {
//     console.log("Balance is less than 700");             //this is Nested if else statemment
// }else if (balance <= 900) {
//     console.log("Balance is less than 900");
// }else {
//     console.log("Balance is less than 1200");
// }


//----------------------------------------- Method 4 ---------------------------------------

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("User is logged in");
} 

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log(`user is logged in..... `);
}

//----------------------------------------- Method 5 ---------------------------------------
