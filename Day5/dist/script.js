"use strict";
// Day 5: video 7
var userDetails = function (id) {
    return "hello ".concat(id); // ${user?.name}'s id is ${id} and age is ${user?.age}
};
console.log(userDetails(23)); // , {name: 'kashem', age: 34}
// video: 8 function signature
// typescript allow user to define a function with his signature or type
// example: 1
var userInfo;
userInfo = userDetails; // not giving error
console.log(userInfo(23, { name: "string", age: 34 }));
// video: 9 class
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old and he is from ").concat(this.country));
    };
    return Player;
}());
// making some class using this
var tanzim = new Player('Tanzim Hasan Sakib', 24, "Bangladesh");
var mrittunjoy = new Player('Mrittunjoy Choudhuri', 25, "Bangladesh");
// we can use this type as a array in typescirpt
// for example
var players = []; // defining this variable as a Player classes array
players.push(tanzim);
players.push(mrittunjoy);
console.log(players);
