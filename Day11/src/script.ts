// video: 1:08:51

// access modifier in classes

class Player  {
    private height; 
    weight;
    constructor (height: number, weight:number) {
        this.height = height;
        this.weight = weight;
    }
    getValue = () => { // this function is allowing the get the value of private property
        return this.height;
    }
}

const jayed = new Player(23, 24);
// console.log(jayed.height); // we can access private property .. it gives us error
console.log(jayed.getValue()); // we can access using function call 

console.log(jayed.weight);

