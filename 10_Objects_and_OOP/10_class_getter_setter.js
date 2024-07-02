class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
         this._email = value
    }


    get password(){
        return `${this._password}Ajay`
    }

    set password(value){
         this._password = value
    }
}


const StudentUser = new user("anu@gmail.com", "anu99")

console.log(StudentUser.email);
console.log(StudentUser.password);

