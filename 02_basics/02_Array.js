const arr1 = ['ajay','anuradha','kk','sakshi','SK']
const arr2 = ['Anji','Chota','Sam','Swala']
const arr3 = ['abc','efg','hij','klm']
//arr1.push(arr2)

//console.log(arr1);


// const arr4 = arr1.concat(arr2)
// console.log(arr4);


const arr4 = [...arr1,...arr2, ...arr3]         //Spread method for combining multiple array

// console.log(arr4);


const bhand = ["Ajay","anu","kk","SK","Sakshi",["swala","anji"],["sam","Sam2",["SP"]]]
//console.log(bhand);

const Members =bhand.flat(Infinity)

//console.log(Members);

console.log(Array.isArray("Ajay"))
console.log(Array.from("Ajay"));
console.log(Array.from({name:"Ajay"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
