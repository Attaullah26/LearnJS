// console.log(Math.PI);
// Math.PI = 5

// console.log(Math.PI);


// const desc = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(desc);



const newUser = {
    name : 'Freelancer', 
    email : 'this',
    isAvailable : false,

    myFun : function (){
        console.log('Its not available');
    }
}

// console.log(newUser.name);
// console.log('Before : ' , Object.getOwnPropertyDescriptor(newUser, 'name'));

Object.defineProperty(newUser, 'name', {
    writable : false
})
// console.log('After : ',Object.getOwnPropertyDescriptor(newUser, 'name'));
// newUser.name = 'Just Testing'
// console.log(newUser.name);
for (const [key, value] of Object.entries(newUser)) {
    if(typeof value !== 'function'){
        console.log(`${key}, ${value}`);
    }
}