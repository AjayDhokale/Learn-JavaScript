let a = 300

if (true) {
    let a =10
    const b =20
    var c= 30

   // console.log("innear a: ",a)
} 

// console.log(a);
// // console.log(b);
// console.log(c);


//++++++++++++++++++++++++++++++++++++++++ Method 1 ++++++++++++++++++++++++++++++++++++++++++++++++++++


function one(){
    const userName = "Ajay"
    function two(){
        const web = " Youtube"
        console.log(userName + web);
    }
    two()
    // console.log(web);
}
//one()

//+++++++++++++++++++++++++++++++++++++++++ Method 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++


if (true) {
    const uname = "Ajay"
    
    
    if (uname === "Ajay") {
        const lname = "Dhokale"
        
        if (lname === "Dhokale") {
            const marks = 100
            
            //console.log(uname +" " + lname  +" "  + "Marks :" + marks);
            
        }
    }
   // console.log("hello");
}

//----------------------------------------- Method 3 ---------------------------------------


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//----------------------------------------- Method 4 ---------------------------------------


function addOne(num1){
    return num1 + 1
}

console.log(addOne(5));

//----------------------------------------- Method 5 ---------------------------------------

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5));