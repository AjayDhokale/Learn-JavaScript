/// For Of

// ["", "", ""]
// [{}, {}, {}]


//----------------------------------------- Method 1 ---------------------------------------

// const arr = [1,2,3,4,5,6,7]

// for (const val of arr) {
//     //console.log(val);
// }


//----------------------------------------- Method 2 ---------------------------------------


// const greetings = "Hello World!"

// for (const greet of greetings) {
//    // console.log(`Each char is : ${greet}`);
// }


//----------------------------------------- Method 3 ---------------------------------------


// const map = new Map()

// map.set('js' , 'Javascript')
// map.set('java' , 'Java')
// map.set('py' , 'Python')
// map.set('swift' , 'swift by apple')


// console.log(map);

// for (const [key, value] of map) {
//    // console.log(key, " : ", value);
// }


//----------------------------------------- Method 4 ---------------------------------------


// const obj = {
//     game1: "NFS",
//     game2: "IGI" ,
//     game3: "BGMI"
// }


//              in forOf loop object is not work beacause object is not iterable


// for (const [key, value] of obj) {
//     console.log(key ," : ", value);  
// }