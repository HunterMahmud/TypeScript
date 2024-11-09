"use strict";
// video: 6
// normal function declaration in ts
const myFunc = () => {
    console.log("hello");
};
myFunc();
// we can define type when assign a function such as
let add; // assign as a function
// add = 5; // this will gives error because of Function type 
add = () => {
    console.log("add");
};
add();
// function with parameter and return type define
let multiple;
multiple = (a, b) => {
    return a * b;
};
console.log(multiple(2, 3));
// console.log(multiple('fdjksal',3)); // this will gives error
// optional parameter in function
let welcome; // here country is optional parameter
welcome = (Name, age, country) => {
    if (country)
        return `${Name} is ${age} years old. and from ${country}`;
    else
        return `${Name} is ${age} years old.`;
};
console.log(welcome('Ban', 2300));
// default value in function 
// let greet : (Name: string, age: number, isMarried:boolean) => string; // this is not giving any error
let greet = (Name, age, isMarried = false) => {
    return `${Name} is ${age} and his marrital status is ${isMarried}`;
};
// console.log(greet('Abdullah', "fda", false)); // this will gives error
console.log(greet('Abdullah', 23, true)); // this will gives error
/// genetic type in typescript normal function
function identity(arg) {
    return arg;
}
console.log(identity(10));
console.log(identity('hello'));
// arrow fucntion 
const Pass = (pass) => {
    return pass;
};
console.log(Pass('abdullah'));
