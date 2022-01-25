import React from "react";

const DriverCard = (props) => {
   return (
       <div style={{backgroundColor: "blue"}}>
       <p>{props.name}</p>
       <img src={props.img} alt={props.name} />
       <p>{props.car.model}</p>
       <p>{props.car.licensePlate}</p>
       </div>
   )
}

export default DriverCard;