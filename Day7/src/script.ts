// video 11: interface


// function without interface
// function drawRectanle(options: {width: number, length: number}):number{
//     let length = options.length;
//     let width = options.width;
//     return length * width;
// }

// console.log(drawRectanle({width:20, length: 30}));


// making function with interface 
interface drawOptions  {width: number; length: number};
function drawRectanle(options: drawOptions):number{ // almost similar to type alias
    let length = options.length;
    let width = options.width;
    return length * width;
};

console.log(drawRectanle({width:20, length: 30}));

// we can also use interface for class but there are some issue when defining private property
// we need to make a public variable to assign the private value

interface playerInter {
    name: string;
    country: string;
    getAge(): number; // if a property private then we have to make a function for it to assign value
    play(): void;
}

class Player implements playerInter{
    constructor(
       public name: string,
       private age: number,
       public country: string
    ){}
    getAge():number{ 
        // here i set age value which is private but we can set multiple value here for exmaple this.name = name etc.
        return this.age;
    }
    play(): void {
        console.log(`${this.name} is ${this.age} years old and he is from ${this.country}`); 
    }
}

let players : playerInter[] = [];

const tanzim: playerInter= new Player('tanzim', 23, "bangladesh");
const mrittunjoy: playerInter = new Player("mrittunjoy", 25, 'Bangladesh');

players.push(tanzim, mrittunjoy);
console.log(players);
console.log(tanzim.getAge());









