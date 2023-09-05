import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}){
    const links = Object.keys(colors).map(color => (
        <li key={color}>
            <Link to={`colors/${color}`}>{color}</Link>
        </li>
    ))

    return (
        <div className="ColorList">
            <h1>Welcome to the color factory</h1>
            <h1><Link to='/colors/new'>Add a color</Link></h1>
            <div>
                <p>Please select a color</p>
                <ul>{links}</ul>
            </div>
        </div>
    )
}

export default ColorList;