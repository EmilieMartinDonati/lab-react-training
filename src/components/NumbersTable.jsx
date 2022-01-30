import React from "react";

const NumbersTable = ({limit}) => {

   let numbers = [];

   for (let i = 0 ; i <= limit ; i ++) {
       numbers.push(i);
   }

   console.log(numbers);

   return (
       <div style={{display: "inline-flex"}}>
        {numbers.map((number) => {
            if (number % 2 === 0)
            return <div style={{width: "80px", backgroundColor: "red"}}>{number}</div>
            else {
                return <div style={{width: "80px", backgroundColor: "green"}}>{number}</div>
            }
        })
        }
       </div>
   )
}

export default NumbersTable;