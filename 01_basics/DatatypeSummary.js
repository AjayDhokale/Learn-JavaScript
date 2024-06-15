//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//----------------------------------------------------------------------------------------------


//Stack (Premitive), Heap(non Premitive)

let fname = "Ajay"
let Lname = fname

//console.log(Lname);

Lname = "Anuradha"

//console.log(fname);
//console.log(Lname);       // In stack only gives the copy of values 


let userOne ={
    email: "ajay@gmail.com",
    upi: "ajay@ybl"
}


let userTwo= userOne

console.log(userOne);       //{ email: 'ajay@gmail.com', upi: 'ajay@ybl' }
console.log(userTwo);       //{ email: 'ajay@gmail.com', upi: 'ajay@ybl' }


userTwo.email="anuradha@gmail.com"   // In Heap gives the Original file of values 

console.log(userOne);       //{ email: 'anuradha@gmail.com', upi: 'ajay@ybl' }
console.log(userTwo);       //{ email: 'anuradha@gmail.com', upi: 'ajay@ybl' }