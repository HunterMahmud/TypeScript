// video: 6
// normal function declaration in ts
const myFunc = () =>{
    console.log("hello");
    
}

myFunc()

// we can define type when assign a function such as

let add : Function; // assign as a function

// add = 5; // this will gives error because of Function type 
add = () =>{
    console.log("add");
    
}
add();

// function with parameter and return type define
let multiple : (a:number, b:number) => number;

 multiple = (a, b)=>{
    return a * b;
}

console.log(multiple(2,3));

// console.log(multiple('fdjksal',3)); // this will gives error

// optional parameter in function

let welcome : (Name:string, age:number, country?:string) => string; // here country is optional parameter

welcome = (Name, age, country ) =>{
    if(country) return `${Name} is ${age} years old. and from ${country}`
    else return `${Name} is ${age} years old.`
}

console.log(welcome('Ban', 2300));

// default value in function 

// let greet : (Name: string, age: number, isMarried:boolean) => string; // this is not giving any error


let greet = (Name:string, age:number, isMarried:boolean=false): string => { // default value of parameter
    return `${Name} is ${age} and his marrital status is ${isMarried}`
}

// console.log(greet('Abdullah', "fda", false)); // this will gives error
console.log(greet('Abdullah', 23, true)); // this will gives error

