// For Each

//----------------------------------------- Method 1 ---------------------------------------

const coding = ["js","java","cpp","ruby","python"]

coding.forEach(function(val) {
    //console.log(val);
} )

coding.forEach( (val2) => {
    //console.log("Programming Languages are:", val2);
} )


function printme(item){
   // console.log(item);
}
coding.forEach(printme)



coding.forEach( (item,index, arr ) => {
    //console.log(item,index,arr);
} )

//----------------------------------------- Method 2 ---------------------------------------

const arr1 = [
    {
        name: "Ajay",
        email: "ajay@gmail.com"
    },
    {
        name: "Anu",
        email: "anu@gmail.com"
    },
    {
        name: "kk",
        email: "kk@gmail.com"
    },
    {
        name: "sakshi",
        email: "sakshi@gmail.com"
    }
]


arr1.forEach( (num1) => {
    console.log(num1.name, " : ", num1.email);
} )