import React from "react";
import './About.css';

const About = () => {
    return(<div className="about-container">
<h1>Bonjour, je suis Saiora !</h1>
    <div className="collage">
    <p>
        Bonjour, je m'appelle Saiora. Je suis architecte et artiste.
        </p>
        <img src="/images/workshop-image.jpg" alt="Workshop collage"/> 
        </div>
        <div className="personal">
            <div className="personal-text">
            <h2>UNE HISTOIRE D'AMOUR</h2>
            <i>Le dessin a été ma plus grande passion depuis la maternelle. A la fac, je passais le plus clair de mon temps dans les ateliers de peinture. J'aime autant les plein-airs que les ateliers de vitynanka, cette technique ukrainienne ancestrale qui me tient particulièrement à coeur.</i>
            </div>
            <div className="personal-image">
            <img src="/images/saiora-main.png" alt="Caramics"/>
            </div>
        </div>
        <div className="gallery-container">
            <div className="gallery-item item-1">
            <img src="/images/young-dina.jpeg" alt="Dina" height="auto" width="300"/>
            </div>
            <div className="gallery-item item-2">
            <img src="/images/uzbekistan.png" alt="" height="auto" width="300"/>
            </div>
            <div className="gallery-item item-3">
            <img src="/images/plein-air.png" alt="" height="auto" width="250"/>
            </div>
            <div className="gallery-item item-4">
            <img src="/images/dina.jpeg" alt="lepka" height="auto" width="250"/> 
            </div>
            <div className="gallery-item item-5">
            <img src="/images/noir-et-blanc.png" alt="" height="auto" width="300"/>
            </div>
            <div className="gallery-item item-6">
            <img src="images/avec-etudiante.png" alt="" height="auto" width="300"/>
            </div>
            
            <div className="gallery-item item-7">
            <img src="/images/expo-1.png" alt="" height="auto" width="300"/>
            </div>
            <div className="gallery-item item-8">
            <img src="/images/expo.png" alt="" height="auto" width="300"/>
            </div>
        </div>
    </div>
    )
}

export default About;