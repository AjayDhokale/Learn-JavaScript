function User(email, password){
    this._email =  email;
    this._password = password;


    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return `1234${this._password}1234`
        },
        set: function(value){
            return this._password = value
        }
    })

}

const user1 = new User("anu@gmail.com","anu")

console.log(user1.email);
console.log(user1.password);