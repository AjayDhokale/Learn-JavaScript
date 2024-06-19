/// for in


//----------------------------------------- Method 1 ---------------------------------------


// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }



// for (const key in myObject) {
//     console.log(`${key} : shortcut is : ${myObject[key]} `);
// }


//----------------------------------------- Method 2 ---------------------------------------


// const myarr =["ajay", "kk", "sk","Sakshi"]

// for (const key in myarr) {
//    console.log("my Name is : " , myarr[key]);
// }


//----------------------------------------- Method 3 ---------------------------------------


// const mymap = new Map()

// mymap.set("Bhand Members1" , "Ajay")
// mymap.set("Bhand Members2" , "Anu")
// mymap.set("Bhand Members3" , "Sk")
// mymap.set("Bhand Members4" , "kk")
// mymap.set("Bhand Members5" , "Sakshi")
// mymap.set("Bhand Members6" , "Swala")
// mymap.set("Bhand Members7" , "Anji")
// mymap.set("Bhand Members8" , "Sam")
// mymap.set("Bhand Members9" , "Sam2")
// mymap.set("Bhand Members10" , "Sourabh")

                                                //  in the forIn we can not access the values of MAP 

// for (const key in mymap) {
//     console.log(`${key} : ${mymap[key]}`);
// }

                                                // in the for_of we can access the values of MAP 

// for (const [key,values] of mymap) {
//     console.log(key, " : ",values );
// }