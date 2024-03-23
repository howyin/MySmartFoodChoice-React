import React from "react";
import "./Card.css";


function Card () {
    
    const title = "Card"; // test
    const image = "https://via.placeholder.com/640x360"; // test

    return (
        <div className="card-layout">
            <h1>{title}</h1>
            <img src={image}></img>
        </div>
    )
}

export default Card;
