
//********** */ How to declare a Symbol ***********
const mySymbol = Symbol('Unique')

let client = {
    name: "Babar",
    // how to add symbol in object 
    [mySymbol]: "symKey",
    age: 26,
    city: "Karachi",
    email: "hello@email.com",
    isLoggedIn: false,
    lastLoggedIn: ["Today", "last Friday"]
}

// console.log(Object.keys(client));
// console.log(Object.values(client));
// console.log(Object.entries(client));


// console.log(client.email);
// console.log(client['email']);

// To restrict from changing in object *********************** user freez
// Object.freeze(client)
client.email = "babarwrites@google.ocm"
// console.log(client['email']);

// to access symbol inside object 
// console.log(client[mySymbol]);
// console.log(typeof mySymbol);

// console.log(client.lastLoggedIn);


// Create a function with object *****************
client.greet = function () {
    console.log("Hello dear client");
}

// console.log(client.greet);
// console.log(client.greet());

client.anotherGreet = function () {
    console.log(`Hello dear client, ${this.name}`);
}

// console.log(client.anotherGreet);
// console.log(client.anotherGreet());




// singleton object syntax *************
// const tinderUser = Object()
// console.log(tinderUser);


// Non Singleton Ojbect ***************
const tinderUser = {}
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Shahid"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(typeof tinderUser.isLoggedIn);






// nested object *****************************************

const regUser = {
    id: 5555,
    name: {
        fullName: {
            firstName: "Babar",
            lastName: "Dahar"
        }
    }
}
// console.log(regUser);
// console.log(regUser.name);
// console.log(regUser.name.fullName);
// console.log(regUser.name.fullName.lastName);





// Join or combine object ************************************************

let one = { 1: "a", 2: "b" }

let two = {
    3: "y",
    4: "z"
}

// let three = {one, two}
// let three = Object.assign({},one, two)
// or  use spread method
const three = { ...one, ...two }
// console.log(three);






// Array of Object 

let users = [
    {
        id: 1,
        name: "Shahrukh",
        email: "hello@email.com"
    }
]

// console.log(users[0].name);



// De-structure Object *************************************
const course = {
    courseName: "Javascript",
    courseFee: 4500,
    courseTeacher: "Babar Khan"
}

console.log(course.courseTeacher);
// const {courseTeacher} = course  OR 
const { courseTeacher: Teacher } = course
console.log(Teacher); 