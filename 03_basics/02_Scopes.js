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


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


if (true) {
    const uname = "Ajay"
    
    
    if (uname === "Ajay") {
        const lname = "Dhokale"
        
        if (lname === "Dhokale") {
            const marks = 100
            
            console.log(uname + lname + "Marks :" + marks);
            
        }
    }
    console.log("hello");
}
