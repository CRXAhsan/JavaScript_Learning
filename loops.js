console.log("*** Loops here ***");

// 1. While Loop

console.log("*** While Loop here ***");

//increment variable for loop
let i = 0;

while( i <= 3){
    console.log(`i value ${i}`);
    i++;
}
console.log("Table Printing");

let UserTableNo  = Number( prompt() );

let j = 1;
let sum;

while(j <= 10)
{
    sum = 0;
    sum = UserTableNo * j;
    console.log(`${UserTableNo} x ${j} = ${sum}`);
    j++;
}

// 2. For Loop

console.log("*** For Loop here ***");
console.log("Print Sum till User input");
sum = 0;
for(var k = 0; k <= UserTableNo ; k++){
    sum = sum + k;
}
console.log("Total sum till user input is "+sum);

// 3. Do-While Loop

console.log("*** Do-While Loop here ***");

let num = 10;

do{
    console.log(num);
    num++;
}while(num <= 9)