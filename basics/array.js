let arr = [1,2,3,5]
let = ['shahrukh', 'salman']


// console.log(arr[0]);
arr.push(11)
arr.push(99)
// console.log(arr)


let fav_colors = ["Red", "Green", "Blue"]
let fav_fruits = ["Banana", "Orange", "Apple"]

// console.log(fav_colors);
// console.log(fav_fruits);

// fav_colors.push(fav_fruits)
let allFav = fav_colors.concat(fav_fruits) //********Instead of push use concat to combine 2 arrays */
// console.log(allFav);

// console.log(Array.isArray(arr));
// console.log(Array.from("BABAR"));
// console.log(Array.from({name: "BABAR"}));



let marks1 = [10,20,30]
let marks2 = [40,50,60]
let marks3 = [70,80,90]

// console.log(Array.of(marks1, marks2, marks3)); or use spread method below
let total = [...marks1, ...marks2, ...marks3]
console.log(total)
let problem = 0.1 + 0.2
console.log(problem.toFixed(2))


