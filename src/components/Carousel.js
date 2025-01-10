import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dataImages from './images';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '800px',
        height: '25%'
      }}
    >
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {dataImages.map((image, idx) => ( 
        <Carousel.Item key={idx}>
        <img 
          src={image.src}
          alt={image.alt} 
          text={image.text} 
          className='d-flex w-100 carousel-img'
        />
      </Carousel.Item>
      ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;