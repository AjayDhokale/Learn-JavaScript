const tinderUser = {}

tinderUser.id = "1"
tinderUser.name = "Ajay"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const usernew = {
    email: "ajay@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Ajay",
            LastName: "Dhokale"
        }   
    }
}


// console.log(usernew.fullname.userFullName.firstName);
// console.log(usernew.fullname.userFullName.LastName);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

//const obj4 = {obj1,obj2,obj3}
//const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

const users = [
    {
        id: 1,
        email: "ajay@gmail.com"
    },
    {
        id: 2,
        email: "anu@gmail.com"
    },    {
        id: 3,
        email: "kk@gmail.com"
    },
]


//console.log(users[1].email);




// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]