// ************BLOCK SCOPE & GLOBAL SCOPE

//*************** */ What is SCOPE *********** ?

// {} When These brackets comes with a function, if else is called SCOPE 

var c = 442

if (true) {
    var c = 10
    let b = 20
    const a = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

// The VAR creates a problem in block and global scope that why we don't use VAR 





//****************** */ Nested functions and their scope*********************

function one() {
    let name = "Babar"
    function two() {
        let youtubeChannel = "BabarWrites"
        console.log(name)
    }
    // console.log(youtubeChannel);
    two()
}
// one()

// Nested function (child) can access the parent's VARIABLES /Clouser concept




// Same thing in if else 

if(true){
    let username = "Babar Khan"
    if(username === "Babar Khan"){
        let website = " Youtube Channel"
        // console.log(`The username is ${username} and its webiste name is ${website}`);
    }
    // console.log(website);
}
// console.log(username);




// =================Mini Hoisting =======================
// or how to decalre a functions

console.log( addOne(10));
function addOne (num){
    return num + 1
}

console.log( addTwo(5)); // This will show error 
const addTwo = function (num){
    return num + 5
}
// addTwo(5)