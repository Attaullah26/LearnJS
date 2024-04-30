
//  Basic function syntax 
function myfunction() {
    console.log("Just created basic function");
}

// myfunction()
// myfunction "This is called reference"
// () "This is called *EXECUTION"



//  More advance function 
function addNumbers(number1, number2) { // inside function defination are called *PARAMETERS*
    // let result = number1 * number2
    return number1 * number2
    // console.log(number1 * number2);
}

let result = addNumbers(50, 5) // Inside execution are called *ARGUMENTS*
// console.log(result);



function UserLoginMessage(username) {
    if(username === undefined) {
        console.log("Enter username");
        return
    }
    return `${username} just loggedIn`
}

// console.log(UserLoginMessage("Babar"));
// console.log(UserLoginMessage(""));
// console.log(UserLoginMessage());




// ********************REST AND SPREAD METHOD IN FUNCTION ***********************
function calculateCartPrice (...num){
    return num
}

// console.log(calculateCartPrice(20,19,998,2222222,555555,88888888,5))





// Handle an Object in a Function and in its Parameters************************
let user = {
    name : "BabarWrites",
    commission : 4500
}

function handleObject (anyObject){
    console.log(`The username is ${anyObject.name} and its commission is ${anyObject.commission}`);
}

// handleObject(user)




// To handle an ARRAY in a function ***************************
let myArray = [
    'Red', 'Green', 'Blue'
]

// function handleArray (anyArray){
//     console.log(`the color of an Rose is ${anyArray[0]}, and its leafs are ${anyArray[1]}, and the sky is ${anyArray[2]}`);
// }

// Return second value 
function handleArray (anyArray){
   return anyArray[2]
}

console.log(handleArray(myArray));




