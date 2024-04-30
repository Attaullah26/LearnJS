
// Basic syntax example
// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){ // This caled METHOD here 
//         return `${this.password}abc`
//     }
//     changeCase (){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const myUser = new user ('Babar', 'babar@google.com', 2526) // Now we can create a user through user class with 'new' keyword
// console.log(myUser);
// console.log(myUser.changeCase());
// console.log(myUser.encryptPassword());




// Behind the scene 

const user = function (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
 return  `${this.password}abc`
}

const test = new user('Khan', 'khan@gmail.com', 420)
console.log(test.encryptPassword());
