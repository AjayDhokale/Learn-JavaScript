/// for Loop

//----------------------------------------- Method 1 ---------------------------------------


for (let i = 0; i <= 10; i++) {
    const element = i
   // console.log(`the value id ${element}`);
}

//----------------------------------------- Method 2 ---------------------------------------

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        if (i==2 || i==5) {
       // console.log(`${i} * ${j} = ${i*j}`);
       // console.log(i + " * " + j + " = " + i*j);         //Another Method
      }
    }
    if (i==3 ) {
       // console.log("-------------------");
      }
}

//----------------------------------------- Method 3 ---------------------------------------


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}


//----------------------------------------- Method 3 ---------------------------------------

const myarr = ["ajay", "Anu", "kk" , "Sakshi"]

for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    //console.log(element);
}


//----------------------------------------- Method 3 ---------------------------------------
// break and continue


for (let i = 0; i < 10; i++) {
    const element = i;
    if (i== 6) {
       // console.log("Loop breaked at "+ `${i}`);
        break                                               //Break statement in loop
    }
   // console.log(element);
}

//----------------------------------------- Method 4 ---------------------------------------
// break and continue



for (let i = 0; i < 10; i++) {
    const element = i;
    if (i==6) {
        console.log(`loop continued at ${i}`);
        continue                                            //continue statement in loop
    }
    console.log(element);
}

