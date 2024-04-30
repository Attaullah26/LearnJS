
// outdated syntax of string 
const name = "babar"
const marks = 55

// console.log(name + marks + "Value");




// nowadays using backticks (string insterpulation) modern way 
// console.log(`My name is ${name} and my marks are ${marks}`);


// another way to declare a string 
const gameName = new String('babar')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,2)
// console.log(newString);

const anotherString = gameName.slice(-4, 2)
// console.log(anotherString);

const newString1 = "       Babar     "
// console.log(newString1);
// console.log(newString1.trim());



// replace function in string 
const url = "https://babar%20attaullah%20dahar"
// console.log(url.replace("%20", "-"));


const sentence = "This is a just sentence by Babar Writes"
// console.log(sentence.includes('babar'));
// console.log(sentence.split(" "));


const myString = new String("Hello Babar")

//********************** */ comparsion*********************

const a = 29
const b = 25

if(a>b){
    // console.log(`${a} is greater than ${b}`);
}else if(a<b){
    // console.log(`${a} is LESS than ${b}`);
}else{
    // console.log(`${a} and ${b} are equal.`);
}



// console.log(a.concat(" ", b))

const mood = 'happy'

console.log(`I fell ${mood.repeat(3)}`);