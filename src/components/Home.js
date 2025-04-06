import React from "react";
import HeaderAnimation from "./HeaderAnimation";
import ControlledCarousel from "./Carousel";
import './Home.css';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <HeaderAnimation />
        <ControlledCarousel />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
