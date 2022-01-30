import React from 'react';
import profiles from "../data/berlin.json";
import {useState} from 'react';

const Facebook = () => {

    const [profil, setProfil] = useState(profiles);

    let newArr = [];

    const handleBackground = (param) => {
        profiles.forEach(function (elem) {
            if (elem.lastName === param) {
                newArr.push({ ...elem, color: "blue"});
            }
            else {
                newArr.push(elem);
            }
        });
        setProfil(newArr);
    console.log(newArr);

    }


    return (
        <div style={{ display: "flex", color: "grey"}}>
            {profil.map((profile) => {
                return <div style={{backgroundColor: profile.color || "green"}}>
                    <div><img src={profile.img} alt={profile.lastName} /></div>
                    <div>
                        <p>First name : {profile.firstName}</p>
                        <p>Last name : {profile.lastName}</p>
                        {!profile.isStudent && (<p>Country : {profile.country}</p>)}
                        {profile.isStudent && (<button onClick={() => handleBackground(profile.lastName)}>{profile.country}</button>)}
                    </div>
                </div>
            })}
        </div>
    )
}



export default Facebook;