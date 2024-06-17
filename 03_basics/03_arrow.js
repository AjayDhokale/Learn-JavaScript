const user = {
    userName: "Ajay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website `);
        console.log(this);

    }
}


// user.welcomeMessage()
// user.userName = "Anu"
// user.welcomeMessage()

// console.log(this);

//----------------------------------------- Method 1 ---------------------------------------


// function chai(){
//     let uName = "Anuradha"
//     console.log(this.uName);
// }

// chai()

//----------------------------------------- Method 2 ---------------------------------------


// const newChai = function(){
//     let uName = "Anuradha"
//     console.log(this.uName);
// }

// newChai()

//----------------------------------------- Method 3 ---------------------------------------


const chai = () => {
    let uName = "Anuradha"
    console.log(this);
}
//chai()


//----------------------------------------- Method 4 ---------------------------------------


const addTwo = (num1,num2) => {
  return  num1 + num2
}
console.log(addTwo(10,20));

//----------------------------------------- Method 4 ---------------------------------------

const addTwo1 = (num1,num2) =>   num1 + num2
console.log(addTwo1(20,20));
 
//----------------------------------------- Method 5 ---------------------------------------

const addTwo3 = (num1,num2) =>   (num1 + num2)
console.log(addTwo3(20,20));
  

//----------------------------------------- Method 6 ---------------------------------------

const addTwo2 = () =>   ({myName: "Anu"})
console.log(addTwo2());




// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()