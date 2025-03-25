import React, { useState } from 'react';
import { ShoppingCart, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        {/* Cart Section */}
        <button className="cart" aria-label="Shopping Cart">
          <ShoppingCart size={24} color="#D9D9D9" />
        </button>

        {/* User Section */}
        <button className="user" aria-label="User Profile">
          <User size={24} color="#D9D9D9" />
        </button>
      </div>

      {/* Hamburger Menu Section */}
      <div className="navbar-right">
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          <span className={`bar ${menuOpen ? 'bar1-active' : ''}`} aria-hidden="true"></span>
          <span className={`bar ${menuOpen ? 'bar2-active' : ''}`} aria-hidden="true"></span>
          <span className={`bar ${menuOpen ? 'bar3-active' : ''}`} aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
