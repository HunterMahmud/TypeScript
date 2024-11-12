"use strict";
//* optional parameter in function
const func = (...rest) => {
    let sum = 0;
    for (let i of rest) {
        sum += i;
    }
    return sum;
};
console.log(func(1, 2, 3, 4, 5, 6, 5, 6));
