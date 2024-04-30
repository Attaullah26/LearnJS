
// ************** FOR EACH LOOP *****************

let coding = ["javascript", "jQuery", "PHP", "Python", 'Node.js']
coding.forEach(function (value){ // _____ can not requre name bcz its an callback ________
    // console.log(value);
})

//_________ can also user arrow function ________

coding.forEach((value) => {
    // console.log(value);
}) // ________ like this _________

// OR Like this 

function printMe  (item){
    // console.log(item);
}

coding.forEach(printMe)

// .......... others access of callback function parameter ...............

coding.forEach((value, index, array) => {
    // console.log(value, index, array);
}) 




// ............. Foreach with Array in Object Complex iteration ...............

let myCoding = [
    {
        Language : "Javascript",
        languageFileName : "js"
    },
    {
        Language : "Phthon",
        languageFileName : "py"
    },
    {
        Language : "Cascading Stylesheet",
        languageFileName : "css"
    },
]

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageFileName);
} )




// ............Foreach return values ................
// e.g 
const returnResult = coding.forEach( (item) => {
    // console.log(item);
} )

// console.log(returnResult);




// ****************** Filter Return value *********************

let nums = [1,2,3,4,5,6,7,8,9]

// let numResult = nums.filter( (num) => 
//     //  num > 3
//     { return num > 3}
//  )

// console.log(numResult);

// .........with foreach .........
let numsTwo = []
nums.forEach((num) => {
    if(num > 3){
        numsTwo.push(num)
    }
})

// console.log(numsTwo);




//........... Loop Map ...............

let myNumbers = [1,2,3,4,5,6,7,8,9,10]

// let myNumbersNew = myNumbers.map((num) => num + 10)

// console.log(myNumbersNew);




// .............Chaining Method .................

myNumbers.map((num) => num * 10)
let myNumbersNew = myNumbers
            .map((num) => num * 10)
            .map((num) => num + 5)
            .filter((num) => num > 50)

// console.log(myNumbersNew);