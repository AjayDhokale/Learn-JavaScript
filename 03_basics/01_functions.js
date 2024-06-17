///Functions

function sayMyName(){               //function Declaration
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("Y");
    
} 

//sayMyName()                       //function Call


// function addTwoNumber(num1, num2){                       //Method 1
//     console.log(num1 + num2);
    
//     return                                                               
// }

//addTwoNumber(10,20)

//--------------------------------------------------------------------------------


// function addTwoNumber(num1, num2){
//     const result = num1 + num2                               //Method 2
    
//     return result
// }

// console.log(addTwoNumber(10,20));

//--------------------------------------------------------------------------------


// function addTwoNumbers(number1, number2){
//     return number1 + number2                             //Method 3
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

//--------------------------------------------------------------------------------



// function loginUserMessage(userName) {
//     return `${userName} Just Logged In.....`
// }


// // console.log(loginUserMessage("Ajay"));


//--------------------------------------------------------------------------------


function loginUserMessage(userName) {

    if(userName === undefined){
        console.log("Please Enter The username");
    }
    else{
            return `${userName} Just Logged In.....`
    }

}

//console.log(loginUserMessage());

//------------------------------- Method 1 -------------------------------------------------


// function calculateCartPrice(num1){
//     return num1
// }

//console.log(calculateCartPrice(100));


//----------------------------------------- Method 2 ---------------------------------------


function calculateCartPrice(num1){
    return num1   
}

//console.log(calculateCartPrice(100,200,300,400));

//----------------------------------------- Method 3 ---------------------------------------


function calculateCartPrice(...num1){
    return num1   
}

//console.log(calculateCartPrice(100,200,300,400));



function calculateCartPrice(val1,val2, ...num1){
    return num1   
}

//console.log(calculateCartPrice(100,200,300,400));





//----------------------------------------- Method 4 ---------------------------------------


// const user = {
//     username: "Ajay",
//     price: 400
// }


// function handleobject(anyobj){
//     console.log(`the username is ${anyobj.username} and price is ${anyobj.price}`);

// }

//handleobject(user)


//----------------------------------------- Method 5 ---------------------------------------

// function handleobject(anyobj){
//     console.log(`the username is ${anyobj.username} and price is ${anyobj.price}`);

// }

// handleobject({
//     username: "Ajay",
//     price: 400
// })



//----------------------------------------- Method 6 ---------------------------------------


// const myArray = [110,200,330,440,500]


// function handleArray(anyArray){
//    return anyArray
// }

// console.log(handleArray(myArray));



//----------------------------------------- Method 6 ---------------------------------------




function handleArray(anyArray){
   return anyArray[3]
}

//console.log(handleArray([110,200,330,440,500]));