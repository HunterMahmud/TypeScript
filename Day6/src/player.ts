export class Player {
    constructor(
      private name: string, // private i cann't modify or access from outside
      public age: number, // i can change and access from outside
      readonly country: string // i can only read but can't modify
    ) {}
  
    play() {
      console.log(
        `${this.name} is ${this.age} years old and he is from ${this.country}`
      );
    }
};  