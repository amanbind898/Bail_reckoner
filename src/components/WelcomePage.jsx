// WelcomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import WelcomeImg from '../assets/Images/Image.png'
import Image from '../assets/Images/Image(1).png'
// import './WelcomePage.css'; // We'll create this CSS file for styling

function WelcomePage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home'); // Redirect to Home page on button click
  };

  return (
    <div className="welcome-page">
      <div className="welcome-image">
        <img src={WelcomeImg} alt="Welcome Illustration" />
      </div>
      <div className="welcome-content">
        <img class="logo" src={Image} alt="" />
        <h1>BailReckoner</h1>
        <p>Legal Interface</p>
        <button className="enter-button" onClick={handleEnter}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
