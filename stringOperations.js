"use strict";

let first_name = "    Ahsan    ";
console.log(first_name);
console.log(first_name.length);

// the answer we get not showing any changes because the all these  function gives us a new string instead of editing the original string

// 1. trim()

console.log("*** Trim Function Here ***");
first_name.trim();
console.log(first_name.length);

let trimFirstName = first_name.trim();
console.log(trimFirstName);
console.log(trimFirstName.length);

// 2. toUpperCase()

console.log("*** ToUpperCase Function Here ***");
first_name.toUpperCase();
console.log(first_name);

var uppercaseName = first_name.toUpperCase();
console.log(uppercaseName);


// 3. toLowerCase()

console.log("*** ToLowerCase Function Here ***");
uppercaseName.toLowerCase();
console.log(uppercaseName);

var lowercaseName = uppercaseName.toLowerCase();
console.log(lowercaseName);

// 4. slice()

console.log("*** Slice Function Here ***");
// uppercaseName.slice(0, 2);
//console.log(uppercaseName);

var temp = uppercaseName.slice(1, 6);
console.log(temp);

// 5. typeof() 

console.log("*** typeOf Function Here ***");
// number -> string
let num = 56;
console.log("***  Number to string ***");
console.log(typeof(num));
// method to covert number to string by using a simple paraenthesis
// local method
num += "";
// good method
num = String(num);
console.log(typeof(num));

// number -> string
let stringNum = "56";
console.log("***  string to Number ***");
console.log(typeof(stringNum));
// method to covert string to  number by using a simple + operator before string
// local method
stringNum = +"56";
// good method
stringNum = Number(stringNum);
console.log(typeof(stringNum));

// 6. string concatenation

let string1 = "13";
let string2 = "12";

let addString = Number(string1) + Number(string2);

console.log(addString);
console.log(typeof addString);

// 7. template strings
let Name = "Ahsan Tariq";
let age = 21;
let aboutMe = `My name is ${Name} & age is ${age}.`;
console.log(aboutMe);

// 8. Undefined

let undefiened_Var = null;
console.log(undefiened_Var);
