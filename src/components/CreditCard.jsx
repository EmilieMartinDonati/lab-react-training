import React from "react";
import masterCard from "../assets/images/master-card.svg";
import visa from "../assets/images/visa.png";


const IdCard = (props) => {
    console.log(props.expirationMonth.toString().split(''));
    return (
        <>
        <div style={{ backgroundColor: props.bgColor, color: props.color, display: "flex-column", paddingRight: "3em", paddingLeft: "3em", borderRadius: "5%" }}>
            {/*  */}
            <div style={{alignSelf: "flex-end"}}>
                {props.type === "Master Card" && (
                    <img src={masterCard} alt={props.type} style={{ width: "30px", height: "30px"}}/>
               )}
                {props.type === "Visa" && (
                    <img src={visa} alt={props.type} style={{ width: "30px", height: "30px" }} />
                )}
            </div>
            <div>
            <p style={{fontSize: "2em"}}>**** **** **** {props.number.slice(-4)}</p>
            {props.expirationMonth.toString().split('').length === 2 && (<p>Expires {props.expirationMonth} /{props.expirationYear} {props.bank}</p>)}
            {props.expirationMonth.toString().split('').length === 1 && (<p>Expires 0{props.expirationMonth} /{props.expirationYear} {props.bank}</p>)}
            <p>{props.owner}</p>
            </div>
        </div>
        </>
    )
}

export default IdCard;