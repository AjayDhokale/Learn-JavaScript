const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')  ///it gives the description of that property

// console.log(descriptor);
// console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);


const chai = {
    name: "ginger Chai",
    price: 250,
    isAvailable : true,
    
    orderChai(){
        console.log("chai Nhi bani");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name',          ///it defines the description of that property
{
    writable :false,
    enumerable: false,
    configurable: false
}
)
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key , value] of Object.entries(chai)) {
 if (typeof value != 'function') {
   
    console.log(`${key} : ${value}`); 
 }
   
}
