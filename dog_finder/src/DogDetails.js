import React from "react";
import { Link } from 'react-router-dom';

function DogDetails({dog}){
    return (
        <div className="DogDetails">
            <img src={dog.src} alt={dog.name}/>
            <h2>{dog.name}</h2>
            <h3>{dog.age} years old</h3>
            <ul>
                {dog.facts.map((fact,i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to='/dogs'>Go Back</Link>
        </div>
    )
}

export default DogDetails;