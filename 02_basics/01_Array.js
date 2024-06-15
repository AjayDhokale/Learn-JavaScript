///     Array

const myArr = [1,2,3,4,5]                   //array declaration
const myArr2 = new Array(1,2,3,4,5,6,7)     //array declaration

// myArr.push(10)
// myArr.push(9)
// console.log(myArr);

// console.log(myArr[5]);


// myArr2.unshift(11)
// console.log(myArr2)

// myArr2.shift(11)
// console.log(myArr2)


// console.log(myArr2.indexOf(7))
// console.log(myArr2.includes(7))

const myArr3 = myArr.join()


console.log(myArr.join(myArr2));



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


