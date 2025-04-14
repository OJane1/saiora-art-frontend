import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Sidebar = ({ isOpen = false, onStateChange = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
    onStateChange(state);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    onStateChange({ isOpen: false });
  };

  useEffect(() => {
    const handleCrossButtonClick = () => {
      closeMenu();
    };

    // Wait for the DOM to be ready
    const timer = setTimeout(() => {
      const crossButton = document.querySelector('.bm-cross-button');
      if (crossButton) {
        crossButton.addEventListener('click', handleCrossButtonClick);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const crossButton = document.querySelector('.bm-cross-button');
      if (crossButton) {
        crossButton.removeEventListener('click', handleCrossButtonClick);
      }
    };
  }, []);

  return (
    <div>
      <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
        <Link onClick={closeMenu} className="menu-item" to="/">Accueil</Link>
        <Link onClick={closeMenu} className="menu-item" to="/program">Programme</Link>
        <Link onClick={closeMenu} className="menu-item" to="/workshop">Ateliers</Link>
        <Link onClick={closeMenu} className="menu-item" to="/cart">Panier</Link>
        <Link onClick={closeMenu} className="menu-item" to="/about">Qui suis-je ?</Link>
        <Link onClick={closeMenu} className="menu-item" to="/events">Evénements</Link>
        <Link onClick={closeMenu} className="menu-item" to="/gallery">Photos et vidéos</Link>
        <div>
        <Contact />
        </div>
      </Menu>
    </div>
  );
};

export default Sidebar;
