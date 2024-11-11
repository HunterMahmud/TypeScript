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




// -------------------------------- video: 13 type generic

// here we can normally use this const makeId = <Type>(userInfo: Type) => { // here no validation
// const makeId = <Type extends object>(userInfo: Type) => { // object validation but format is not defined
// we can also use this to make it more validate such as below

const makeId = <Type extends {
    name: string;
    age: number;
}>(userInfo: Type) => {
    
    const id = Math.floor(Math.random() * 100);
    return {...userInfo, id};
}

const userInfo = {
    name: "mahmud",
    age: 26
}

const user = "mahmud";

const userWithId = makeId(userInfo);

console.log(userWithId.id);
console.log(userWithId.age);
console.log(userWithId.name);


// generic in interface this can be happened

// interface ApiResponse{
//     status: number;
//     isAvailable: boolean;
//     data: object;
// }

// const apiResponse1 : ApiResponse = {
//     status: 200, 
//     isAvailable: true,
//     data:{
//         productId: 2,
//         details: 'here is the details about the product'
//     }
// } 


// here is another example specify the data we have to rechieve the type after apiResponse and then we can set it to the data like below:

// interface ApiResponse<Type>{ // this Type will recieve the object from below
//     status: number;
//     isAvailable: boolean;
//     data: Type;
// }

// const apiResponse1 : ApiResponse <{ // here we can say just <object>
//     productId: number;
//     details: string
// }> = { // we have to send the type from here
//     status: 200, 
//     isAvailable: true,
//     data:{
//         productId: 2,
//         details: 'here is the details about the product'
//     }
// } 



// console.log(apiResponse1?.data?.productId);



// video: 14 enum type


enum ResType {SUCCESS, FORBIDDEN, UNAUTHENTICATED, RESTRICTED};




interface ApiResponse<Type>{ 
    status: ResType;
    isAvailable: boolean;
    data: Type;
}

const apiResponse1 : ApiResponse <{ 
    productId: number;
    details: string
}> = { 
    status: ResType.FORBIDDEN, // this will print 1, if we say ResType.SUCCESS it will be 0 like this. 
    isAvailable: true,
    data:{
        productId: 2,
        details: 'here is the details about the product'
    }
} 



console.log(apiResponse1?.data?.productId);



// video 15: touples

let a = [1, "hello", {t: 2}];
a[0] = "hello" // no errors because of array can be any of three types (number or string or object)

// if we want position by position strict then we have to use touples

let b: [number, string, object] = [1, 'bangladesh', {t2: 7}];

// b[0] = "hello" // this is not accepted 


// done full playlist 

// i will move forward to practice on the project
