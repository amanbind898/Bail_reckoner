// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import IconUser from '../assets/Images/Icon_user_shield.png'
import Icon_gavel from '../assets/Images/Icon_gavel.png'
import Icon_Balance from '../assets/Images/Icon_balance_scale.png'

function Home() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'undertrial') {
      navigate('/undertrial-dashboard');
    }else if (role === 'legal-aid-provider') {
      navigate('/legal-aid-dashboard');
    }else if (role === 'judicial-authority') {
      navigate('/judicial-authority');
    }
    // Add navigation for other roles if needed
  };

  return (
    <div className="Home">
      <header className="header">
        <div className='logo'>
            <img src={Icon_Balance} alt="" />
            <h1>Bail Reckoner</h1>
        </div>
        
        <div className="profile-menu">
          <span>Undertrial Prisoner</span>
          <span>Legal Aid Provider</span>
          <span>Judicial Authority</span>
        </div>
      </header>
      <main className="main-content">
        <h2>Select Your Role</h2>
        <div className="role-selection">
          <div className="role-card" onClick={() => handleRoleSelection('undertrial')}>
            <div className="role-icon">
              <img src={IconUser} alt="Undertrial Prisoner" />
            </div>
            <h3>Undertrial Prisoner</h3>
            <p>Access your case details and track your bail status.</p>
            <button className="select-button">Select</button>
          </div>
          <div className="role-card" onClick={() => handleRoleSelection('legal-aid-provider')}>
            <div className="role-icon">
            <img src={Icon_gavel} alt="Legal Aid Provider" />
            </div>
            <h3>Legal Aid Provider</h3>
            <p>Manage your clients and provide legal aid services.</p>
            <button className="select-button">Select</button>
          </div>
          <div className="role-card" onClick={() => handleRoleSelection('judicial-authority')}>
            <div className="role-icon">
            <img src={Icon_Balance} alt="" />
            </div>
            <h3>Judicial Authority</h3>
            <p>Oversee cases and manage judicial procedures.</p>
            <button className="select-button">Select</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
