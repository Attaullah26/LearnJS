
// class user {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`The Username is ${this.username}`);
//     }
// }



// class Teacher extends user (){
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`The course has been created by ${this.username}` );
//     }
// }


// const test = new Teacher('Rrogramming', 'pro@emailcom', '123')
// // test.addCourse()

// const first = new user('firstTest')
// first.logMe()




class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} logged in`);
    }
    
     createId(){
        return 123
    }
}


const secondUser = new User('Babar Khan')
console.log(secondUser.createId());





