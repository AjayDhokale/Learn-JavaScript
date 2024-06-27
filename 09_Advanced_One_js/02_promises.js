// Promise(function(){}).then().then().catch().finally()          //syntax for Promise  //it is like fetch() method

// const promiseOne = new Promise(function(resolve,reject) {
//      //Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function() {
//         console.log("async task completed");
//         resolve()
//     },1000)
// });


// promiseOne.then(() => {
//     console.log("Promise Consumed...");
// })



// new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         console.log("async task 2 completed ");
//         resolve()
//     },1000)
// }).then(() => console.log("promise 2 comsumed..."))



// const promiseThree = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         console.log("Async task 3 completed ");
//         resolve({username: "Ajay",email: "ajay@gmail.com"})
//     },1000)
// })


// promiseThree.then((user) => {
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         error = true
//         if (!error) {
//             console.log("Async task 4 completed ");
//             resolve({username:"Ajay", password: "1234" })
//         }else{
//             reject("Error: Something went wrong...");
//         }
//     },1000)
// })


// promiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The promise is either solved or rejected...."))




// const promiseFive = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         error= false
//         if (!error) {
//             console.log("async Task 5 ......");
//             resolve({username:"Ajay",email:"ajay@gmail.com"})
//         }else{
//             reject("Error : Somthing went wrong...")
//         }
//     },1000)
// })


// async function comsumePromiseFive() {
//  try {
//     const responce = await promiseFive
//     console.log(responce);
//  } catch (error) {
//     console.log(error);
//  }
// }

// comsumePromiseFive()



// async function hiteshData() {
// try {
//     const responce = await fetch('https://api.github.com/users/hiteshchoudhary')

//     const data = await responce.json()
//     console.log(data);

// } catch (error) {
//     console.log("E: ",error);
// } 

// }

// hiteshData()



fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(user){  
    return user.json()
}).then(function(info){
    console.log(info);
    return info.name
}).then(function(nm){
    console.log(nm);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("API fetched succesfully.........."))






