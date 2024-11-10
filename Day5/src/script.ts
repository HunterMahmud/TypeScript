// Day 5: video 7

// type alias

// defining type is sometimes can be bigger in a specific area
// we can define type like a variable and we can use it as type

// Example: 1
type strOrNum = string | number; // type alias
type userType = {name: string, age: number}; // type alias

const userDetails = (id:strOrNum)=>{ // , user:userType
    return `hello ${id}` // ${user?.name}'s id is ${id} and age is ${user?.age}
}

console.log(userDetails(23)); // , {name: 'kashem', age: 34}

// video: 8 function signature

// typescript allow user to define a function with his signature or type

// example: 1
let userInfo: (id: strOrNum, user:userType) => string;

userInfo = userDetails // not giving error

console.log(userInfo(23, {name:"string", age:34}));

// video: 9 class

class Player{
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(`${this.name} is ${this.age} years old and he is from ${this.country}`);
    }
}

// making some class using this
const tanzim = new Player('Tanzim Hasan Sakib', 24, "Bangladesh");
const mrittunjoy = new Player('Mrittunjoy Choudhuri', 25, "Bangladesh");

// we can use this type as a array in typescirpt
// for example

let players: Player[] = []; // defining this variable as a Player classes array

players.push(tanzim);
players.push(mrittunjoy);

console.log(players);



