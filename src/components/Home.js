import React from "react";
import HeaderAnimation from "./HeaderAnimation";
import Stack from 'react-bootstrap/Stack';
import ControlledCarousel from "./Carousel";
import './Home.css';
import Contact from "./Contact";


const Home = () => {
  return (
   <Stack gap={6}>
        <div>    
      <HeaderAnimation /> 
      </div>
      <div>
        <ControlledCarousel />
      </div>
      <div>
      <Contact />
      </div>
      </Stack>
  );
};

export default Home;
