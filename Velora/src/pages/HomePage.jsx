import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">VELORA</h1>
          <div className="circles-container">
            <div className="circle circle-small"></div>
            <div className="circle circle-medium"></div>
            <div className="circle circle-large"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;