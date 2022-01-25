import React from "react";

const IdCard = (props) => {
   return (
       <div>
       <img src={props.picture} alt={props.lastName}/>
       <p>{props.firstName}</p>
       <p>{props.lastName}</p>
       <p>{props.height}</p>
       <p>{props.gender}</p>
       <p>{JSON.stringify(props.birth, null, 2)}</p>
       </div>
   )
}

export default IdCard;