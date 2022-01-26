import React from "react";

const IdCard = (props) => {
   return (
       <div id="id-card">
       <div><img src={props.picture} alt={props.lastName}/></div>
       <div>
       <p>{props.firstName}</p>
       <p>{props.lastName}</p>
       <p>{props.height}</p>
       <p>{props.gender}</p>
       <p>{props.birth.toDateString()}</p>
       </div>
       <hr></hr>
       </div>
   )
}

export default IdCard;