"use strict";
// Day 5: video 7
var userDetails = function (id, user) {
    return "".concat(user === null || user === void 0 ? void 0 : user.name, "'s id is ").concat(id, " and age is ").concat(user === null || user === void 0 ? void 0 : user.age);
};
console.log(userDetails(23, { name: 'kashem', age: 34 }));
