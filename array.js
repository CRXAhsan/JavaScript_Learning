console.log("arrays are refrence type");

// we can make array of single datatypes
let fruits = ["Apple", "Banana", "Mangoes"];
console.log(fruits);
// alos we make mixed datatypes in a single array
let Mixed = [2 , 4.56 , "Apple" , 54];
console.log(Mixed);

console.log(typeof fruits);

// check that this variable is array or not it will give true if it was array
console.log(Array.isArray(fruits));

// Methods Used In Arrays:

// 1. Push Method: it will add element at the end of the array

fruits.push("Banana");
console.log(fruits);

// 2. POP Method: it will delete element from the end of the array and also return the deleted element which you can store in a variable

fruits.pop();
console.log(fruits);
let poppedFruit = fruits.pop();
console.log(poppedFruit);

// 3. UnShift Method: it will add element at the start of the array

fruits.unshift("Grapes");
console.log(fruits);

// 4. Shift Method: it will delete and return element from the start of the array
let shifedFruit;
shifedFruit = fruits.shift();

console.log(`Shifted Fruit is ${shifedFruit}`);
console.log(fruits);

//Push and Pop methods are fast
//Shift & Unshift Methods are Slow as compared to push and pop method.


// Primitive and Refrenece Data Types

// console.log("Primitive and Refrenece Data Types");

// console.log("Primitive Data Type");
// let num1 = 6;
// let num2 = num1;

// console.log("Before Increment...");
// console.log(`Value of num1 is ${num1}`);
// console.log(`Value of num2 is ${num2}`);
// num1++;
// console.log("After Increment num1...");
// console.log(`Value of num1 is ${num1}`);
// console.log(`Value of num2 is ${num2}`);

// console.log("Refrence Data Type");

// let array1 = ["item1", "item2"];
// let array2 = array1;

// console.log("Before Increment...");
// console.log(`Value of array1 is ${array1}`);
// console.log(`Value of array2 is ${array2}`);
// array1.push("item3");
// console.log("After Increment array1...");
// console.log(`Value of array1 is ${array1}`);
// console.log(`Value of array2 is ${array2}`);

// How to Clone or Make a copy of array 

// 1. method repetation of code
// let array1 = ["item1" , "item2" ];
// let array2 = ["item1" , "item2" ];

// 2. method is using slice function and give index to it
// let array1 = ["item1" , "item2" ];
// let array2 = array1.slice(0);

// 3. method is using concat fun and give the array name to be copied
// let array1 = ["item1" , "item2" ];
// let array2 = [].concat(array1);

// 4. method is spread operator means write 3 dots before writing the name of array to be copied
//let array1 = ["item1" , "item2" ];
//let array2 = [...array1];

console.log("Clone an Array or make a copy of it...");

let array1 = ["item1" , "item2" ];
let array2 = array1.slice(0);

array1.push("item3");
console.log(array1 === array2);
console.log(`Array 1 elements are: `,array1);
console.log(`Array 2 elements are: `,array2);




