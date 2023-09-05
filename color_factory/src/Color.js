import React from "react";
import { Link } from "react-router-dom";

function Color({color, hex}){
    return (
        <div className="Color" style={{backgroundColor: hex}}>
            <p>This is {color}</p>
            <p>Isn't it beautiful?</p>
            <p><Link to='/'>Go Back</Link></p>
        </div>
    )
}

export default Color;