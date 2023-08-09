let num1 = 2,
    num2 = 23;

console.log("*** Comparioson and Boolean relation ***");
console.log(num1 < num2);

num1 = "23";
console.log(" == VS === ");
//it will only checks the data not checking the datatypes
console.log(num1 == num2);
//it will checks the datatype along with the data 
console.log(num1 === num2);

console.log(" != VS !== ");
num1 = 34;
//it will only checks the data not checking the datatypes
console.log(num1 != num2);
//it will checks the datatype along with the data 
console.log(num1 !== num2);

// we have some truthy and falsy values
//falsy values ( false , "" , undefined , null , 0 )
//truthy values ( other all values are truthy )

let age = 1;



if(age > 18){
    console.log("User can play Cricket...");
}
else if(age >= 10 && age <= 18)
{
    console.log("user can watch Cricket..")
}
else{
    console.log("User cannot watch & play Cricket...");
}

// ternary operator

age = 31;
// variable   checking condition  ternary operator  if true this value  if false after colon value  
let drink = age >= 5 ? "Coffee" : "Milk";

console.log(`Your age is ${age}, So drink ${drink}.`);