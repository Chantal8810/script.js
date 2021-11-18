console.log("Hello again NTRS!!");

//Declaring variables
//Numbers
let a = 1;
let b = 2;

console.log(a);
console.log(b);

console.log(a + b);
console.log(a / b);

a = 3;
console.log(a);
console.log(a + b);

let sum = a + b;
console.log(sum);

b = 4;
console.log(sum);

sum = a + b;
console.log(sum);

// Strings
let str_1 = "NTRS";
let str_2 = 'Group';
console.log(str_1);
console.log(str_2);

console.log(str_1 + str_2); // Concatenation
console.log(str_1 + " " + str_2);

let str_3='"Try even if you fail,but never fail to try!"';
console.log(str_3);

let str_4 = "1";
let str_5 = "2";
console.log(str_4 + str_5);

str_4 = Number(str_4);
console.log(str_4);

console.log(str_4.toString());
console.log(str_4);

/*
= means assign
== compare value
=== compare value and data type
*/


// string Methods
let str_6 = "Damien";
console.log(str_6);
console.log(str_6.toUpperCase());
console.log(str_6.toLowerCase());
console.log(str_6.length);
console.log(str_6.indexOf("a"));
console.log(str_6.indexOf("D"));
console.log(str_6.indexOf("w"));

// User interactions
// alert
alert('Hello everyone!');

// prompt
let input = prompt("Please enter you name:");
console.log("Your name is " + input);

// Confirm
let confirmation = confirm("Are you tired");
console.log(confirmation);

// Boolean
// true or false only

// nul
// undefined

let var_1 = null;
let var_2;

console.log(var_1);
console.log(var_2);
