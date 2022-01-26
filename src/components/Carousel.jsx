import React from 'react';
import {useState} from 'react';

const Carousel = ({images}) => {

console.log(images);

const [image, setImage] = useState(images[0]);

const leftHandler = () => {
    switch (image) {
      case images[0]:
        setImage(images[3])
        break;
      case images[3]:
        setImage(images[2])
        break;
      case images[2]:
        setImage(images[1])
        break;
        case images[1]:
        setImage(images[0])
        break;
      default:
        console.log(`Sorry, we are out of images`);
    }
    console.log(image);
}

const rightHandler = () => {
    switch (image) {
      case images[0]:
        setImage(images[1])
        break;
      case images[1]:
        setImage(images[2])
        break;
      case images[2]:
        setImage(images[3])
        break;
        case images[3]:
        setImage(images[0])
        break;
      default:
        console.log(`Sorry, we are out of images`);
    }
    console.log(image);
}

    return (
    <>
        <button onClick={leftHandler}>Left</button>
        <img alt="" src={image}/>
        <button onClick={rightHandler}>Right</button>
    </>
    )
}

export default Carousel;