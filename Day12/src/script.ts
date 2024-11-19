// // video: 1:19:59

// // inheritance and set and get

// class Player {
//   readonly id: number;
//   constructor(
//     private readonly height: number,
//     public weight: number,
//     protected readonly isMarried: boolean
//   ) {
//     this.height = height;
//     this.weight = weight;
//     this.isMarried = isMarried;
//     this.id = Math.floor(Math.random() * 100);
//   }
//   get getInfo(): number {
//     return this.id;
//   }

//   set setWeight(val: number) {
//     this.weight = val;
//   }
// }

// class Player2 extends Player {
//   // inheritance
//   constructor(
//     height: number,
//     weight: number,
//     isMarried: boolean,
//     private sayHello: boolean
//   ) {
//     super(height, weight, isMarried);
//     this.sayHello = sayHello;
//   }
//   getIsMarried = () => {
//     return this.isMarried;
//   };
//   callHello = () => {
//     return this.sayHello;
//   };
// }

// const Zayed = new Player(24, 24, false);

// // console.log(Zayed.getInfo); // getter function don't need to call

// console.log(Zayed.weight);
// Zayed.setWeight = 57; // don't need to call and pass the parameter

// console.log(Zayed.weight);

/// video: 1:32:00

// type assertion and dom element access using typescript

// const btn = document.getElementById("btn") as HTMLButtonElement; // this is one method of type assertion of setting forcefully that i am sure this is HTMLButtonElement or HTMLElement
// const btn = document.getElementById("btn")!; // this is another method of get rid of null value
const btn = <HTMLButtonElement> document.getElementById("btn"); // this is another method of setting the type assertion
const img = <HTMLImageElement> document.getElementById("myImg");

btn.onclick = () => {
  img.src = "https://i.ibb.co.com/nMsM6WZ/interview.jpg";
  alert("image added");
}

