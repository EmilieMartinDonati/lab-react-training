import React from "react";

const IdCard = (props) => {
   return (
       <div style={{backgroundColor: props.bgColor, color: props.color}}>
       <p>{props.type}</p>
       <p>{props.number}</p>
       <p>{props.expirationMonth}</p>
       <p>{props.expirationYear}</p>
       <p>{props.bank}</p>
       <p>{props.owner}</p>
       </div>
   )
}

export default IdCard;