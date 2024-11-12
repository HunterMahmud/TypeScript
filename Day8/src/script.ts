//* optional parameter in function

// type Func = (n: number, m: number, l?: number) => number;

// const func : Func = (n, m, l) => {
//     if(l === undefined) return n*m;
//     else return n*m*l;
// }



//* seting default value of optional parameter
type Func = (n: number, m: number, l?: number) => number;

const func : Func = (n, m, l= 20) => {
     return n*m*l;
}

console.log(func(2,3)); // here we can give the argument or not we want