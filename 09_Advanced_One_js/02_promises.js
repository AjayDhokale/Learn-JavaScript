// Promise(function(){}).then().then().catch().finally()          //syntax for Promise  //it is like fetch() method

const promiseOne = new Promise(function(resolve,reject) {
     //Do an async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log("async task completed");
        resolve()
    },1000)
});


promiseOne.then(() => {
    console.log("Promise Consumed...");
})



new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("async task 2 completed ");
        resolve()
    },1000)
}).then(() => console.log("promise 2 comsumed..."))



const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log("task 3 ");
        resolve({username: "Ajay",email: "ajay@gmail.com"})
    },1000)
})


promiseThree.then((user) => {
    console.log(user);
})