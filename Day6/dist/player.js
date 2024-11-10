export class Player {
    constructor(name, // private i cann't modify or access from outside
    age, // i can change and access from outside
    country // i can only read but can't modify
    ) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and he is from ${this.country}`);
    }
}
;
