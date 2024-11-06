"use strict";
// video: 3
//Example: 1
// let playerName = "Muhammad ibn Zain";
// console.log(playerName);
// playerName = 26; // error checking while assigning a different types of value
// Example: 2
// let personName;
// personName = "mahmud";
// personName = 34; // this will not gives error but this is not a good practice
// console.log(personName);
// Example: 3
// function multiply (a:number,b:number){
//     return a * b;
// }
// console.log(multiply(3, 5));
// console.log(multiply("mahmud", 5)); // this will gives error because of function's parameter type definition
// Example: 4 array
// let fruits = ['apple', 'banana', 'orange']; // here fruits type is string only
// fruits.push('pineapple'); // no error in this line
// fruits.push(32) // this line gives error 
// let mixed = ['ahmad', 34, false]; // here type can be string, number, boolean
// mixed.push('abdullah') // no error generate
// mixed.push(23) // no error generate
// Example: 5 object
// let person = {
//     name: "abdullah",
//     age: 25,
//     isMarried: false
// }
// person.age = "hello"; // this will generate error because of individually auto define of typescript (perosn.age:number)
// person.country = "bangladesh"; // this will also gives error because typescirpt define the schema when defining the object
// video: 4
// Example: 1
// exclusitely defining the variable type when defining 
// let num:number; // defining number type of num
// let personName:string; // defining string type of personName
// //  Example: 2 for array
// let arr : string[]=[];
// arr.push('hello'); // no error
// arr.push(45); // gives error
// Example: 3 variable defining
// let a : string | number; // can be string or number
// let b : (string | number) [] = []; // array element can be string or number
// let c : object;
// let d : {
//     name: string;
//     age: number;
//     isMarried: boolean;
//     country: string;
// }; // specific defining of object where all property defined
