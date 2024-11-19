"use strict";
// video: 1:08:51
// access modifier in classes (public, private, protected)
// public: accessalbe in anywhere
// private: only accessable inside the class itself
// protected: accessable in parent and child classes but can't access from outside
class Player {
    constructor(height, weight, isMarried) {
        this.isMarried = isMarried;
        this.getValue = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
        this.isMarried = isMarried;
    }
}
class Player2 extends Player {
    constructor(height, weight, isMarried, play) {
        super(height, weight, isMarried);
        this.play = play;
        this.getMarriedStatus = () => {
            return this.isMarried;
        };
        this.play = play;
    }
}
const jayed = new Player(23, 24, true);
// console.log(jayed.height); // we can access private property .. it gives us error
console.log(jayed.getValue()); // we can access using function call 
console.log(jayed.weight);
const salman = new Player2(154, 74, false, true);
console.log(salman.getMarriedStatus());
console.log(salman.weight);
