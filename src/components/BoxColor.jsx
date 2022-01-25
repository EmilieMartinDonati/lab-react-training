import React from "react";

const BoxColor = (props) => {

    function Colormixing(a, b, c) {
        return `rgb(${a} + ${b} + ${c})`;
      }
    
      const finalColor = Colormixing(props.r, props.g, props.b);
    
      console.log(finalColor);

    return (
        <div style={{
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
            height: `400px`,
        }}>Hello
        </div>
    )
}

export default BoxColor;