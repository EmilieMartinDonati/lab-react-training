import React from "react";

// ✩
// ⭑



const Rating = (props) => {

    let starsArray = [];
    let emptyStarsArray = [];

    function starGenerator(number) {
        number = Math.round(number);
        console.log("this is the number from the props --------", number);
        if (number > 0) {
            for (let i = 1; i <= number; i++) {
                starsArray.push("⭑");
            };
        }
        const rest = (5 - number);
        if (rest > 0) {
            for (let i = 0; i < rest; i++) {
                emptyStarsArray.unshift("✩");
            };
        }
    }


    starGenerator(props.children);


    return (
        <div><span>{starsArray}</span><span>{emptyStarsArray}</span>
        </div>
    )
}

export default Rating;