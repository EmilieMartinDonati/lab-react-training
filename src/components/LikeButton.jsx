import React from "react";
import {useState} from "react";

// const colors = ['purple','blue','green','yellow','orange','red'];

const LikeButton = (props) => {

const [count, setCount] = useState(0);

// const countHandler = () => setCount(count + 1);

console.log(count)

    return (
        <div>
    <button onClick={() => setCount(count + 1 )} ><span>{count}</span> likes</button>
    </div>
    )
}


export default LikeButton;
