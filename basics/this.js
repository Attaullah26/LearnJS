// ++++++++++++Arrow function & THIS keyword+++++++++++++++++++

// ________________THIS keyword refers to a current context___________

const user = {
    name : "Babar Ali",
    fee : 3500,

    welcomeMsg : function (){
        // console.log(`Hello Mr. ${this.name} welcome to our site`);
        console.log(this);
    }
    
}

// user.welcomeMsg('Rahul Khan')
// user.name = "Sam John"
// user.welcomeMsg()

// console.log(this);
//_______in NODE enciornment THIS refers to EMPTY OBJECT, because there is no context in the golbal___________
//_________In the brower the goobal object is WINDOW OBJECT-___________






function hello(){
    let username = "Sagar"
    console.log(this.username); // here we can not use THIS keyword in function it works in object 
}
// hello()

// ++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++

// ______________Method to write arrow function ________________

const arrowFun = () => {
    let username = "Sagar"
    console.log(this); //____________ in arrow function THIS keyword returns emppty object
}

// arrowFun()

const addTwo = (num, num2) => {
    return num + num2
}

console.log(addTwo(5,5));


// +++++++++++++++ Implicit Return in Arrow function ++++++++++++++++

// let implicit = (num , num2) => num * num2 // OR
// let implicit = (num , num2) => (num * num2)

// let implicit = (num, num2) => {username: "Babar"} // ______________ to pass object it should be wrapped in parenthesis
let implicit = (num, num2) => ({username : "babar"})

console.log(implicit(51, 5));

// __________ if we use parenthesis (EXPLICIT   ) we should use keyword RETURN otherwise not ____________



