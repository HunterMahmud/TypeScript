"use strict";
// video 11: interface
;
function drawRectanle(options) {
    let length = options.length;
    let width = options.width;
    return length * width;
}
;
console.log(drawRectanle({ width: 20, length: 30 }));
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        // here i set age value which is private but we can set multiple value here for exmaple this.name = name etc.
        return this.age;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and he is from ${this.country}`);
    }
}
let players = [];
const tanzim = new Player('tanzim', 23, "bangladesh");
const mrittunjoy = new Player("mrittunjoy", 25, 'Bangladesh');
players.push(tanzim, mrittunjoy);
console.log(players);
console.log(tanzim.getAge());
