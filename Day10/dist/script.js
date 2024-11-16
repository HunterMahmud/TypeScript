"use strict";
//video: 1:06:07
// type never explaining
// const err: Error = new Error(); // this is error type
// // but in below function
// const errorHandler = () => { 
//     // return new Error("something went wrong!"); // this one actually "const errorHandler: () => Error"
//     throw new Error("something went wrong!"); // when directly throw error then "const errorHandler: () => never" // here type never shows
// }
// classes in typescript
// normal classes in typescript where all value is public
class Player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
const jayed = new Player(23, 24);
console.log(jayed.height);
console.log(jayed.weight);
