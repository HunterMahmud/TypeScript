// video: 1:08:51

// access modifier in classes (public, private, protected)
// public: accessalbe in anywhere
// private: only accessable inside the class itself
// protected: accessable in parent and child classes but can't access from outside

class Player  {
    private height;
    weight;

    constructor (height: number,weight:number,protected isMarried: boolean) { // you can directly initialize here then you don't need to initialize before (protedted isMarried: boolean)
        this.height = height;
        this.weight = weight;
        this.isMarried = isMarried;
    }
    getValue = () => { // this function is allowing the get the value of private property
        return this.height;
    }
}

class Player2 extends Player {
    
    constructor(height:number, weight: number, isMarried: boolean, public play: boolean){
        super(height, weight, isMarried);
        this.play = play;
    }
    getMarriedStatus = () => {
        return this.isMarried;
    }
    // getHeight = () => {
    //     return this.height; // this access will gives error because of private property
    // }
}

const jayed = new Player(23, 24, true);
// console.log(jayed.height); // we can access private property .. it gives us error
console.log(jayed.getValue()); // we can access using function call 

console.log(jayed.weight);

const salman = new Player2(154, 74, false, true);

console.log(salman.getMarriedStatus());
console.log(salman.weight);



