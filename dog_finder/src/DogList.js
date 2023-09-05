import React from "react";
import { Link } from 'react-router-dom';
import './DogList.css'
function DogList({dogs}){
    return(
        <div className="DogList">
            <div>
                <h1>Come, Browse our selection of dogs. Click a name for more info</h1>
            </div>
            <div>
                {dogs.map(dog => (
                <div> 
                    <img src={dog.src} alt={dog.name}/>
                    <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                </div>))}
            </div>
        </div>
    )
}

export default DogList;