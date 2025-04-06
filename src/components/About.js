import React from "react";
import './About.css';
import aboutImages from "./aboutImages";
import Contact from "./Contact";

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
            <img src="/images/saiora-main.png" alt="Summer portrait"/>
            </div>
        </div>
        <div className="photos-container">
                {aboutImages.map((image, index) => (
                    <div key={index} className={`gallery-item item-${index + 1}`}>
                        <img 
                        src={image.src} 
                        alt={image.alt || "Gallery Image"} 
                        height="auto" 
                        width="300" 
                        loading="lazy"
                        srcSet={`${image.src} 300w, ${image.src} 600w`}
                        sizes="(max-width: 600px) 100vw, 300px"/>
                    </div>
                ))}
            </div>
            <Contact />
    </div>
    )
}

export default About;
