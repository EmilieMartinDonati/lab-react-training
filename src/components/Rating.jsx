import React from "react";

// ✩
// ⭑



const Rating = (props) => {

let starsArray = [];
let emptyStarsArray = [];

function starGenerator (number) {
    Math.floor(number);
    console.log(number);
    for (let i = 0; i <= number.length ; i ++) {
       starsArray.unshift("⭑");
    };
const rest = Math.floor(5 - number);
console.log(rest);
for (let i = 0; i < rest ; i ++) {
    emptyStarsArray.unshift("✩");
 };
}

// oh, no, it's actually with className who have background images.

starGenerator(props.children);


   return (
       <div><span>{starsArray}</span><span>{emptyStarsArray}</span>
       </div>
   )
}

export default Rating;