class User{
    constructor(username)
    {
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
         //when we declare static keyword then that function is can not be accessed by any class or child class
     static createId(){            
        return `123`
    }
}


const ajay = new User("Anu")
// ajay.logMe();
// console.log(ajay.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("Anu", "Anu@iphone")

iphone.logMe()
console.log(iphone.createId());