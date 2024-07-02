const User ={
    _email: "anu@gmail.com",
    _password: "abc",


    get email(){
       return this._email.toUpperCase() 
    },

    set email(value){
        this._email = value
    },

    get password(){
        return `1234${this._password}1234`
    },

    set password(value){
        return this._password = value
    }

}

const user1 = Object.create(User)

console.log(user1._email)
console.log(user1._password)

