"use strict";
// video: 1:19:59
// inheritance and set and get
class Player {
    constructor(height, weight, isMarried) {
        this.height = height;
        this.weight = weight;
        this.isMarried = isMarried;
        this.height = height;
        this.weight = weight;
        this.isMarried = isMarried;
        this.id = Math.floor(Math.random() * 100);
    }
    get getInfo() {
        return this.id;
    }
    set setWeight(val) {
        this.weight = val;
    }
}
class Player2 extends Player {
    // inheritance
    constructor(height, weight, isMarried, sayHello) {
        super(height, weight, isMarried);
        this.sayHello = sayHello;
        this.getIsMarried = () => {
            return this.isMarried;
        };
        this.callHello = () => {
            return this.sayHello;
        };
        this.sayHello = sayHello;
    }
}
const Zayed = new Player(24, 24, false);
// console.log(Zayed.getInfo); // getter function don't need to call
console.log(Zayed.weight);
Zayed.setWeight = 57; // don't need to call and pass the parameter
console.log(Zayed.weight);
