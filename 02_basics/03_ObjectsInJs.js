
const mySym = Symbol("key1")

const JsUser = {
    name:"Ajay",
    "Full Name" : "Ajay Dhokale",
    [mySym] : "mykey1",
    age : 22,
    location: "Ich",
    email: "ajay@gmail.comn",
    isLoggedIn : false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["Full Name"]);
// console.log(JsUser["mySym"]);
// console.log(JsUser.location);
// console.log(JsUser.email);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser.LastLoginDays);


// JsUser.email = "ajay@jjmcoe.in"
// console.log(JsUser.email);

// Object.freeze(JsUser)

// JsUser.email = "anu@jjmcoe.in"

// Object.freeze(JsUser)
// console.log(JsUser.email);

JsUser.greeting = function(){
     console.log("Hello JS User");
 }

 JsUser.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`);
}


console.log(JsUser.greeting);
console.log(JsUser.greeting2);

