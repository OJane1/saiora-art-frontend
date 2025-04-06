import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dataImages from './images';
import './Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {dataImages.map((image, idx) => ( 
          <Carousel.Item key={idx}>
            <img 
              src={image.src}
              alt={image.alt} 
              text={image.text} 
              className="carousel-img"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;