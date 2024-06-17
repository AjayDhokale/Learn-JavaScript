// Immediately Invoked Function Expressions (IIFE)  

///this IIFE function is need close by a semi colon (;)

//----------------------------------------- Method 1 ---------------------------------------

function chai(myname){
    console.log(`DB Coonected ${myname}`);          //Normal Function
}
chai("Anu");

//----------------------------------------- Method 2 ---------------------------------------


(function chai1(myname1){                             //IIFE Function with function name
    console.log(`DB Coonected ${myname1}`);
}) ("Anu");

//----------------------------------------- Method 3 ---------------------------------------

((name) =>{                                          //IIFE Function without function name
    console.log(`DB Connected To ${name}`);
}) ("ajay");