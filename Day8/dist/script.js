"use strict";
//* optional parameter in function
const func = (n, m, l = 20) => {
    return n * m * l;
};
console.log(func(2, 3)); // here we can give the argument or not we want
