import React from "react";
import { useState } from "react";
import Empty from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';

const Dice = (props) => {

    const [img, setImg] = useState();

    const picturesArr = [
        Dice1, 
        Dice2, 
        Dice3, 
        Dice4, 
        Dice5, 
        Dice6
    ];

    let rand = picturesArr[Math.floor(Math.random() * picturesArr.length)];

    const imageHandler = () => {
    setImg(Empty);
    setInterval(function() {
        setImg(rand);
    }, 3000);
    }

    return (
         
        <div>
        <h3 onClick={imageHandler}>DICE</h3>
            <img src={img} alt="" style={{
                width: '100px',
                height: '100px'
            }}></img>
        </div>
    )
}

export default Dice;