import React from "react";
import { useState } from "react";

const ClickablePicture = ({img, imgClicked}) => {


const [image, setImage] = useState(img);


    return (
        <img src={image} alt="" onClick={() => setImage(imgClicked) }/>
    )
}

export default ClickablePicture;