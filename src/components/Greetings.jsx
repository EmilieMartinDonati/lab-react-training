import React from "react";

const Greetings = (props) => {
    return (
        <div>
            <p><span>{props.lang}</span> <span>{props.children}</span></p>
        </div>
    )
}

export default Greetings;