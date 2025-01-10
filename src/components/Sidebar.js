import React, { useState } from "react";
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
  };

  return (<div>
    <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
      <Link onClick={closeMenu} className="menu-item" to="/">Accueil</Link>
      <Link onClick={closeMenu} className="menu-item" to="/program">Programme</Link>
      <Link onClick={closeMenu} className="menu-item" to="/workshop">Ateliers</Link>
      <Link onClick={closeMenu} className="menu-item" to="/cart">Panier</Link>
      <Contact />
    </Menu>
    </div>
  );
};

export default Sidebar;
