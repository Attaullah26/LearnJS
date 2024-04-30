// -------------DATE---------------//
// It is an OBJECT

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toString())
// console.log(myDate.toTimeString())


let myCreatedDate = new Date("01-02-1995")
// console.log(myCreatedDate.toLocaleDateString());



// Time Stamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // to seconds



// console.log(myDate.getDate())
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth())

// console.log(`Todays date is ${myDate}`)


// more about toLocaleString

myDate.toLocaleDateString('default', {
    weekday: 'short'
})
