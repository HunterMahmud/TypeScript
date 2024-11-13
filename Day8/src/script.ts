//* optional parameter in function

// type Func = (n: number, m: number, l?: number) => number;

// const func : Func = (n, m, l) => {
//     if(l === undefined) return n*m;
//     else return n*m*l;
// }



//* seting default value of optional parameter
// type Func = (n: number, m: number, l?: number) => number;

// const func : Func = (n, m, l= 20) => {
//      return n*m*l;
// }

// console.log(func(2,3)); // here we can give the argument or not we want


// video: 51:10

// rest parameter in function

type Func = (...rest: number[]) => number;

const func: Func = (...rest) => {
    let sum: number = 0;
    
    for(let i of rest){
        sum += i;
    }
    return sum;
}

console.log(func(1,2,3, 4, 5, 6, 5, 6));
