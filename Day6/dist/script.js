// module system in typescirpt 
import { Player } from "./player.js";
// making some class using this
const tanzim = new Player('Tanzim Hasan Sakib', 24, "Bangladesh");
const mrittunjoy = new Player('Mrittunjoy Choudhuri', 25, "Bangladesh");
let players = [];
players.push(tanzim);
players.push(mrittunjoy);
console.log(players);
