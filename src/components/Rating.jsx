import React from "react";

const Rating = (props) => {

function starGenerator (number) {
    for (let i = 0; i <= number.length ; i ++) {
       return <img src="../assets/images/six-pointed-star-ge47d44d91_640.png" alt="" />
    }
}

// oh, no, it's actually with className who have background images.

const output = starGenerator(props.children)


   return (
       <div>{output}
       </div>
   )
}

export default Rating;