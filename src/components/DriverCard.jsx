import React from "react";

const DriverCard = (props) => {
   return (
       <div style={{backgroundColor: "blue", borderRadius: "5%", padding: "1em"}}>
       <p>{props.name}</p>
       <img src={props.img} alt={props.name} style={{
           height: "100px",
           width: "100px"
       }} />
       <p>{props.car.model}</p>
       <p>{props.car.licensePlate}</p>
       </div>
   )
}

export default DriverCard;