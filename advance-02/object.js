// ***********8 LITERAL OBJECT **************** //

// e.g
const user = {
    username : 'Babar',
    email : 'babar@google.com',

    userdetails : function(){
        console.log(this);  
    }
}
// console.log(user.username);
// console.log(user.userdetails());
// console.log(this);





// ***************** CONSTRUCTOR FUNCTION ***************** //
// ******************** THIS *********************//
// It gives a new constructor every time

// 01- When we use 'new' it create new empty object , called instance
// 02- Constructor function called 
// 03- 

//examples 
// const promiseOne = new Promise()
const date = new Date()
// _________ Word 'NEW' is a constructor________ Used to make new context __________


function users (username, isLoggedIn, password){
    this.username = username 
    this.isLoggedIn = isLoggedIn 
    this.password = password 
 return this
}


// let userOne = users('Babar', 12, true)
// let userTwo = users('Attaullah', 122, false)

// console.log(userOne);
// _______ here userTwo overwrite the userOne becasue of not using 'NEW' word _________


let userOne = new users('Babar', 12, true)
let userTwo =new  users('Attaullah', 122, false)

// console.log(userOne);
// console.log(userTwo);


let myName = "Babar    "
console.log(myName.length);



String.prototype.trimName = function(){
    console.log(`Actual length is : ${this.trim().length}`);
}

console.log(myName.trimName());