// video: 5
// topic 1: any type which is dyanmic type
// if we declare a variable with the type then if a situation comes where the variable value 
// can dynamically changes then we can use a type which is "any"

let a: string; // as a string 
let b: any; // it can be anything but its not a good practice


a = "bangladesh"; // no error
// a = 3; // error
console.log(a)

// but we can use store any data into any type variable without any error

b = 'hello'; // no error
b = 2; // no error
b = {hello: 123}; // no error

console.log(b);

// example 2: any type of array

let c : any[] = []; // the element of this array can be any type

c.push("Abdullah"); // no error
c.push(3); // no error
c.push(false); // no error


console.log(c)

// example 3: any type of object

let d : {
    Name: any;
    age: any;
}

// we can store any data on this object property
