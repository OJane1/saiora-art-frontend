import "./Events.css";
import React from 'react';
import Contact from "./Contact";

const Events = () => {
    return(
        <div className="events-container">
            <div className="list">
            <h4>EXPOSITIONS SELECTIONEES :</h4>

<div className="year">2024</div>
<ul>
    <li><span className="exhibition-title">L'Art du moment</span>, atelier Ephèmere avec Saiora, Lyon</li>
</ul>
<div className="year">2014</div>
<ul>
    <li><span className="exhibition-title">Vie peinte en deux couleurs</span>, exposition au consulat d'Ukraine, Marseille </li>
</ul>
<div className="year">2013</div>
<ul>
    <li><span className="exhibition-title">Ville Vie Visages</span>, Allianse Française, Marseille </li>
</ul>
</div>
        <div>
            <Contact />
        </div>
        </div>
        
    )
}

export default Events;