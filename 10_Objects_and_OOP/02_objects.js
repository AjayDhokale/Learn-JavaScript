// function mutiplyby5(num) {
//     return num*5
// }


// mutiplyby5.power = 2



// console.log(mutiplyby5(6));
// console.log(mutiplyby5.power);
// console.log(mutiplyby5.prototype);



function user(username,score){
    this.username =username
    this.score = score
}


user.prototype.increment = function(){
    this.score++
}

user.prototype.printMe = function() {
    console.log(`The  value  is : ${this.score}`);
}


const userOne =  new user("Anu",80)

userOne.printMe()