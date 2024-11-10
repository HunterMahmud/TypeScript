// Day 5: video 7

// type alias

// defining type is sometimes can be bigger in a specific area
// we can define type like a variable and we can use it as type

// Example: 1
type strOrNum = string | number; // type alias
type userType = {name: string, age: number}; // type alias

const userDetails = (id:strOrNum, user:userType)=>{
    return `${user?.name}'s id is ${id} and age is ${user?.age}`
}

console.log(userDetails(23, {name: 'kashem', age: 34}));
