/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/

let pronoun = ['the', 'our'];
let adj = ['great', 'big','skibiddi'];
let noun = ['jogger', 'racoon','toilet'];
let dom = ['.com','.es','.mx'];

for(let i = 0; i < pronoun.length; i++){
  for(let j = 0; j < adj.length; j++){
    for (let k = 0; k < noun.length; k++){
      for(let m = 0; m < dom.length; m++)
      {
    
    console.log(adj[j]+ pronoun[i] + noun[k] + dom[m] );
  }
}}}