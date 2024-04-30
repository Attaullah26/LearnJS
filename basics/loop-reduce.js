
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (accum, currentValue){
//     // console.log(`"Accum value is : ${accum} , Current Value is ${currentValue}` );
//     return accum + currentValue
// },0)
// console.log(myTotal);



// ......... Syntax in Arrow function ..........

const myTotal = myNums.reduce((acc, currentvalue) => acc + currentvalue,0) // ________ smart and short way --------
// console.log(myTotal); 







// ........ Another Example .............

const shoppingCart = [
    {
        itemName : "Mobile",
        price : 10
    },
    {
        itemName : "Charger",
        price : 5
    },
    {
        itemName : "Smart Watch",
        price : 20
    },
    {
        itemName : "TV",
        price : 15
    }
]


const totalPrice = shoppingCart.reduce((acc, currentPrice) => acc + currentPrice.price,0)
console.log(totalPrice);