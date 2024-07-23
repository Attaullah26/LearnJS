// ******************** PROMISE **********************//
// It is an object


// ************** How to make PROMIS ******************* //
// SYNTAX
const promiseOne = new Promise(function (resolve, reject) { // its not necessary to store promise in a variable
    // Do and async task
    // DB Calls , cryptography, Netwrok 
    setTimeout(function () {
        // console.log('Async task completed');
        resolve() // call resolve to connect resolve and then, otherwise prommis will not consumed,
    }, 1000)
})

// ________ Resolve's connection is directly wih then() _________
promiseOne.then(function () { // ________use CATCH inplace of then to catch ERROR_______
    // console.log('Promise consumed.'); // _______ All values returns to this function ___________
})


// ---------- Another way in one part ----------------//

new Promise(function (resolve, reject) {
    setTimeout(() => {
        // console.log('Async 2 task completed');
        resolve()
    }, 2000);
}).then(function () {
    // console.log('Async 2 is resolved.');
})




// Promis Three
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: 'Babar', email: 'babar@google.com' })
    }, 1000);
})

promiseThree.then(function (user) {
    // console.log(user);
})



// Promise Four 
new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (error) {
            PromiseRejectionEvent('ERROR : Something went wrong.');
        } else {
            resolve({ username: 'Attaullah', password: '123' })
        }
    }, 1000);
}).then(function (user) {
    console.log(user);
    return user.username // we can return vlaue to next then or chaning method
}).then(function (username) {
    // console.log(username);
}).catch(function (error) {
    // console.log(error);
}).finally(() => console.log('The Promise is either rejected or resolved.'))


// syntax showing tip 
// .then(function(user){
//     console.log(user);
//      return user.username // we can return vlaue to next then or chaning method
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })



// **************** METHOD 2 **********************

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (error) {
            reject('ERROR : JS went wrong.');
        } else {
            resolve({ username: 'Javascript Language', password: '321' })
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        // console.log(response);

    } catch (error) {
        // console.log(error);
    }
}
consumePromiseFive()





// Fetch with data 
// async function fetchAllUsers() {
//     try {
//         const response = await fetch('https://randomuser.me/api')
//         console.log(response);
//         const data = await response.json() // response also take time time to take an action, also await it
//         console.log(data);
//     } catch (error) {
//         // console.log('E : ', error);
//     }
// }

// fetchAllUsers()


// fetch('https://randomuser.me/api')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// })
