// LegalAidDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your CSS styles
import Icon_Balance from '../assets/Images/Icon_balance_scale.png'

function LegalAidDashboard() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="LegalAidDashboard">
      <header className="header">
        <div className='logo'>
            <img src={Icon_Balance} alt="" />
            <h1>Bail Reckoner</h1>
        </div>
        
        <div className="profile-menu">
          <span>Home</span>
          <span>Profile</span>
          <span>Settings</span>
        </div>
      </header>

      <main className="main-content">
        {/* <div className='sidebar'> */}
            {/* <nav className="nav"> */}
            {/* <ul> */}
                {/* <li onClick={() => navigate('/')}>Home</li> */}
                {/* <li>Client Details</li> */}
                {/* <li>Case Management</li> */}
                {/* <li>Resources</li> */}
            {/* </ul> */}
            {/* </nav> */}
        {/* </div> */}

        <div className='content'>
            <h2>Client Details</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Client Name:
                <input type="text" placeholder="Client Name" />
            </label>
            <label>
                Lawyer Name:
                <input type="text" placeholder="Lawyer Name" />
            </label>
            <label>
                Client Id:
                <input type="text" placeholder="Client Id" />
            </label>
            <label>
                Case Details:
                <textarea placeholder="Case Details" />
            </label>
            <button className="submit-button" type="submit">Submit</button>
            </form>

            <div className="summary-resources">
            <div className="case-summary">
                <h3>Case Summary</h3>
                <p>View and manage case details, track progress, and update information as needed.</p>
            </div>
            <div className="resources">
                <h3>Resources</h3>
                <p>Access legal documents, templates, and other resources to assist in case management.</p>
            </div>
            </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2023 Bail Reckoner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LegalAidDashboard;
