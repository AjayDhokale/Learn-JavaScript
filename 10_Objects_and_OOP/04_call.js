function setUserName (username) {
    this.username = username
    console.log("called");
}


function creteUser(username, email, password) {
    
    setUserName.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new creteUser("Anu", "Anu@gmail.com", 1234)

console.log(chai);
