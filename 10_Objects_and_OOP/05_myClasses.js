

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email ;
        this.password = password;   
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}



const user1 = new user("Anu", "anu@gmail.com", 1234)

// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())


// behind the scene


function UserData(username,email , password){
    this.username = username
    this.email = email
    this.password = password
}

UserData.prototype.encryptPassword = function() {
    console.log(`abcd${this.password}abc`);
}

UserData.prototype.changeUsername = function () {
    console.log(`${this.username.toUpperCase()}`);
}

const student = new UserData("Anuradha", "anu@gmail.com", 12345)

student.encryptPassword()
student.changeUsername()