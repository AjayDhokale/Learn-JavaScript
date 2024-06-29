let myName = "Ajay     "


// console.log(myName.trim().length);


let myheros = [ "thor", "ironman"]

let herosPower = {
    thor: "God of Thunder",
    ironmman: "iron suit",

    getThorPower :function () {
        console.log(`The Power of Thor is : ${this.thor}`);
    }
}

//this user defined prototype is accessed by all oobjects,array function,strings
Object.prototype.ajay = function () {                               
    console.log("Ajay is present in all functions");
}


//this user defined prototype is accessed by only array because it it defined for only array 
Array.prototype.heyAjay = function () {             
    console.log("Hey Ajay............");
}

// herosPower.ajay()
// myheros.ajay()
// myheros.heyAjay()
// herosPower.heyAjay()




/////////////////////                           inheritance

const user = {
    name: "Anu",
    email : "Anu@gmail.com"
}

const teacher = {
    makeVedio : true
}

const teachingSupport = {
    isAvalaible : false
}

const TASupport = {
    makAssignments : "Js Assignments",
    fullTime: true,
    __proto__ : teachingSupport,                                //old syntax of giving inheritance
}

teacher.__proto__ = user                                        //old syntax of giving inheritance


Object.setPrototypeOf(teachingSupport,teacher)                  // modern syntax of giving inheritance


let  myfriend = "Anuradha                "


String.prototype.trueLength = function () {
    console.log(`The true lenght of string is: ${this.trim().length}`);
}

myfriend.trueLength()