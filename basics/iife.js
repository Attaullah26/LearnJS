// ++++++++++++++++++ IIFE (Imeediately Invoke Function Expressions) ++++++++++++++++++
// Why we use IIFE.....?
// "ANSWER" => To avoide the global polution.

// _________ To drag whole block in parenthesis is called IIFE_____________
(function avoid  (){
    // NAMED IIFE
    console.log("Successfully connected.");
})();
//______ it is necessary to enter ; to end the invoke otherwise error occured_______

( (name) => {
    // UNNAMED IIFE
    
    console.log(`Successfully connected another ${name}`);
})("Attaullah Dahar")

// _________ We can also use arrow function with IIFE and pass parameters and iterate variable dynamically ____________