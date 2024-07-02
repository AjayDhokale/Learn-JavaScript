class user{
    constructor(username){
        this.username = username
    }
    

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password 
    }

    addCourse(){
        console.log(`The new couse added by ${this.username}`);
    }

}

const user1 = new Teacher("Ajay", "Ajay@gmail.com", 1234)

// user1.logMe()

const user2 = new Teacher("Anu")

// user2.logMe()

user1.addCourse()


console.log(user1 instanceof user);