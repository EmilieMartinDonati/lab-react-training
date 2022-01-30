import React from "react";
import { useState } from "react";

const ClickablePicture = ({img, imgClicked}) => {


const [image, setImage] = useState(img);
const [isClicked, setIsClicked] = useState(false);

const handleClick = () => {
    setIsClicked(true);
    if (isClicked) setImage(imgClicked);
    

}


    return (
        <img src={image} alt="" onClick={handleClick}/>
    )
}


// Je mets isClicked

// Non il faut qu'au suivant, je toggle de nouveau. donc c'est bien d'avoir deux states.

export default ClickablePicture;