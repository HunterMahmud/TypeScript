"use strict";
// video 11: interface
var _a;
;
function drawRectanle(options) {
    let length = options.length;
    let width = options.width;
    return length * width;
}
;
console.log(drawRectanle({ width: 20, length: 30 }));
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        // here i set age value which is private but we can set multiple value here for exmaple this.name = name etc.
        return this.age;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and he is from ${this.country}`);
    }
}
let players = [];
const tanzim = new Player('tanzim', 23, "bangladesh");
const mrittunjoy = new Player("mrittunjoy", 25, 'Bangladesh');
players.push(tanzim, mrittunjoy);
console.log(players);
console.log(tanzim.getAge());
// -------------------------------- video: 13 type generic
// here we can normally use this const makeId = <Type>(userInfo: Type) => { // here no validation
// const makeId = <Type extends object>(userInfo: Type) => { // object validation but format is not defined
// we can also use this to make it more validate such as below
const makeId = (userInfo) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, userInfo), { id });
};
const userInfo = {
    name: "mahmud",
    age: 26
};
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
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FORBIDDEN"] = 1] = "FORBIDDEN";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["RESTRICTED"] = 3] = "RESTRICTED";
})(ResType || (ResType = {}));
;
const apiResponse1 = {
    status: ResType.FORBIDDEN, // this will print 1, if we say ResType.SUCCESS it will be 0 like this. 
    isAvailable: true,
    data: {
        productId: 2,
        details: 'here is the details about the product'
    }
};
console.log((_a = apiResponse1 === null || apiResponse1 === void 0 ? void 0 : apiResponse1.data) === null || _a === void 0 ? void 0 : _a.productId);
