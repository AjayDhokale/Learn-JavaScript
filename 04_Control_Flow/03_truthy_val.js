const userEmail = []

// if (userEmail) {
//     console.log("user logged in...");
// } else {
//     console.log("user not logged in...");
// }

//----------------------------------------- Method 1 ---------------------------------------

// falsy values
// false, 0, -0, BigInt 0n, '' , "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}



 const newArr = []

// if (newArr.length == 0){
//     console.log("array is Empty");
// }else{
//     console.log("Array is bharlela");
// }


//----------------------------------------- Method 2 ---------------------------------------


const newobj = {user : "ajay"}

// if (Object.keys(newobj).length == 0) {
//     console.log("Object is Empty");
// } else {
//     console.log("Object is not Empty");
// }

//----------------------------------------- Method 3 ---------------------------------------


// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val2 = null ?? 10
// val3 = undefined ?? 20
// console.log(val1);
// console.log(val2);
// console.log(val3);


// Terniary Operator

// condition ? true : false

let num1 = 4

num1 == 5 ? console.log(`${num1} is eqal to 5`) : console.log(`${num1} is not eqal to 5`) ; 
