// reduce() function in the loop


//----------------------------------------- Method 1 ---------------------------------------



// const numArr = [1,2,3]

// //let newNum = numArr.reduce( (accumulator, item) => accumulator + item  )

// let myTotal = numArr.reduce( (accumulator , item) => { 
//     console.log(`accumulator : ${accumulator} and Current Value : ${item}`);
//     return accumulator + item;
// }, 0)


// //console.log(myTotal);



//----------------------------------------- Method 2 ---------------------------------------


let myShoopingCart = [
    {
        itemName : "Js Course",
        price : 3000
    },
    {
        itemName : "Python Course",
        price : 6000
    },
    {
        itemName : "Java Course",
        price : 9000
    },
    {
        itemName : "c Course",
        price : 1000
    },
    {
        itemName : "cpp Course",
        price : 7000
    },
]

const myTotalBill = myShoopingCart.reduce( (accumulator, items) => {
    return accumulator + items.price;
}, 0 )

console.log(`Your Total Shopping Bill is : `, myTotalBill);


