const user = {
    userName: "Ajay",
    loginCount : 12,
    isSignedIn : true,

    getUserDetails :function () {
         console.log(this);
    }
}


// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName, loginCount, isLoggedIn){
        this.userName = userName
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn

        datails = function () {
            console.log(`Username is: ${this.userName}`);
        }
    return this
        
}


const userOne = new User("Ajay",12,true)
const userTwo = new User("Anii",121,false)

console.log(userOne.constructor);
console.log(userTwo);
