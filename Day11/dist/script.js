"use strict";
// video: 1:08:51
// access modifier in classes
class Player {
    constructor(height, weight) {
        this.getValue = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
    }
}
const jayed = new Player(23, 24);
// console.log(jayed.height); // we can access private property .. it gives us error
console.log(jayed.getValue()); // we can access using function call 
console.log(jayed.weight);
