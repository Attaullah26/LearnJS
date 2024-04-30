// ********************* For Of Loop ********************
// ____ Very easy to use without giving increment/decrement etc _______

let colors = ["Red", "Green", "Blue"]

for (const color of colors) {
    // console.log(color)
}





// .................. MAP ...................
// ______ Map contains only UNIQUE Values without any Duplication ________

let firstMap = new Map()

firstMap.set("PK", "Pakistan")
firstMap.set("US", "United States")
firstMap.set("Ch", "China") // _______ it does not accept duplication _______
firstMap.set("IN", "India")
firstMap.set("Ch", "China")

// console.log(firstMap);

// ............... For of loop on Map ..............
for (const [key, value] of firstMap) {
    // console.log([key+ `:` + value]);
}




// ............... For Of with Object ................


let myObj = {
    name: "Babar"
    , email: "babar#google.ocm"
}

// for (const [key, value] of myObj) {
//     console.log([key + `:` + value]); // _________ object is not iterateable with For Of loop ________
// }




// ********************* FOR IN LOOP **************************
// ..........With Objects ..............
const myObject = {
    js : "Javascript",
    jQ : "Jquery",
    CSS : "Cascading Stylesheet",
    HTML : "Hypertext Markup Language"
}

// for (const key in myObject) {
//     console.log(key);
// }
// for (const key in myObject) {
//     console.log(`${key} for ${myObject[key]}`);
// }




// ............For IN With Array .............
for (const color in colors) {
    // console.log(color); // _________For in loop also shows the array's keys_______
    // console.log(colors[color]);
}



