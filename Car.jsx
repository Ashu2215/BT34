import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero-section">
      <nav className="navbar">
        <div className="logo">CARZONE</div>
        <ul className="nav-links">
          <li>HOME</li>
          <li>SERVICE</li>
          <li>FEATURED CARS</li>
          <li>NEW CARS</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      <div className="content">
        <h1>
          GET YOUR <span className="highlight-orange">DREAM CAR</span> AT A{' '}
          <span className="highlight-pink">DREAM PRICE</span>
        </h1>
        <p>The largest inventory of cars in Northern India</p>
        <button className="contact-btn">CONTACT US</button>
      </div>
    </div>
  );
}

export default App;
