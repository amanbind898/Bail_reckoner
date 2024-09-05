// import React from 'react';
// import '../App.css';
// import Icon_Balance from '../assets/Images/Icon_balance_scale.png'

// function UndertrialDashboard() {
//   return (
//     <div className="UndertrialDashboard">
//       <header className="header">
//         <div className='logo'>
//             <img src={Icon_Balance} alt="" />
//             <h1>Bail Reckoner</h1>
//         </div>
        
//         <div className="profile-menu">
//           <span>Home</span>
//           <span>Legal Aid Provider</span>
//           <span>Judicial Authority</span>
//         </div>
//       </header>
//       <main className="main-content">
//         <h2>Undertrial Prisoner Dashboard</h2>
//         <div className="dashboard-content">
//           <div className="case-details">
//             <h3>Case Details</h3>
//             <form>
//               <label>
//                 Case Number
//                 <input type="text" placeholder="Case Number" />
//               </label>
//               <label>
//                 Name of Undertrial
//                 <input type="text" placeholder="Name of Undertrial" />
//               </label>
//               <label>
//                 Crime
//                 {/* <input type="text" placeholder="Charges" /> */}
//                 <select className='options'>
//                   <option>Cyber Crimes</option>
//                   <option>Crimes Against SCs and STs</option>
//                   <option>Crimes Against Women</option>
//                   <option>Crimes Against Children</option>
//                   <option>Offences Against the State</option>
//                   <option>Economic Offence</option>
//                   <option>Crimes Against Foreigners</option>
//                 </select>
//               </label>
//               <label>
//                 Imprisonment Served
//                 <input type="text" placeholder="Years of imprisonment" />
//               </label>
//               <label>
//                 Bail Bond
//                 <input type="text" placeholder="Bail Bond" />
//               </label>
//               <label>
//                 Surety Bond
//                 <input type="text" placeholder="Surety Bond" />
//               </label>
//               <button className="submit-button" type="submit">Submit Details</button>
//             </form>
//           </div>

//           <div className="nlp-results">
//             <h3>NLP & ML Results</h3>
//             <label>
//               Information Extracted by NLP
//               <textarea placeholder="Information Extracted by NLP"></textarea>
//             </label>
//             <div className="ml-prediction">
//               <p>ML Prediction: Bail Eligibility</p>
//               <label>
//                 <input type="radio" name="eligibility" value="eligible" />
//                 Eligible
//               </label>
//               <label>
//                 <input type="radio" name="eligibility" value="not-eligible" />
//                 Not Eligible
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="recommendations">
//           <h3>AI Recommendations</h3>
//           <div className="recommendation-content">
//             <div className="recommendation-left">
//               <p>Based on the charges and case details, it is recommended to highlight the following points in the bail application:</p>
//               <ul>
//                 <li>No prior criminal record</li>
//                 <li>Strong family ties in the community</li>
//                 <li>Employment history showing stability</li>
//                 <li>Health concerns requiring regular treatment</li>
//               </ul>
//             </div>
//             <div className="recommendation-right">
//               <p>Additional considerations:</p>
//               <ul>
//                 <li>Possibility of electronic monitoring</li>
//                 <li>Willingness to surrender passport</li>
//                 <li>Proposed guarantor details</li>
//                 <li>Community service options</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="steps">
//           <h3>Steps to Apply for Bail</h3>
//           <ul>
//             <li>Gather all necessary documents (ID, case file, medical records)</li>
//             <li>Fill out the bail application form accurately</li>
//             <li>Submit the application to the court or relevant authority</li>
//             <li>Attend the bail hearing, presenting the case details and recommendations</li>
//             <li>Follow up with the court for the bail decision</li>
//           </ul>
//         </div>
//       </main>
//       <footer className="footer">
//         <ul>
//           <li>Contact Us</li>
//           <li>Privacy Policy</li>
//           <li>Terms of Service</li>
//         </ul>
//       </footer>
//     </div>
//   );
// }

// export default UndertrialDashboard;



import React, { useState } from 'react';
import '../App.css';
import Icon_Balance from '../assets/Images/Icon_balance_scale.png';

function UndertrialDashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCrimes, setSelectedCrimes] = useState([]);

  // List of crimes
  const crimeOptions = [
    'Cyber Crimes',
    'Crimes Against SCs and STs',
    'Crimes Against Women',
    'Crimes Against Children',
    'Offences Against the State',
    'Economic Offence',
    'Crimes Against Foreigners',
  ];

  // Handle dropdown toggle
  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent page refresh
    setDropdownOpen(!dropdownOpen);
  };

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCrimes([...selectedCrimes, value]);
    } else {
      setSelectedCrimes(selectedCrimes.filter((crime) => crime !== value));
    }
  };

  return (
    <div className="UndertrialDashboard">
      <header className="header">
        <div className='logo'>
            <img src={Icon_Balance} alt="" />
            <h1>Bail Reckoner</h1>
        </div>
        
        <div className="profile-menu">
          <span>Home</span>
          <span>Legal Aid Provider</span>
          <span>Judicial Authority</span>
        </div>
      </header>
      
      <main className="main-content">
        <h2>Undertrial Prisoner Dashboard</h2>
        <div className="dashboard-content">
          <div className="case-details">
            <h3>Case Details</h3>
            <form>
              <label>
                Case Number
                <input type="text" placeholder="Case Number" />
              </label>
              <label>
                Name of Undertrial
                <input type="text" placeholder="Name of Undertrial" />
              </label>

              {/* Checkbox dropdown for crimes */}
              <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button">
                  Select Crimes
                </button>

                {dropdownOpen && (
                  <div className="dropdown-content">
                    {crimeOptions.map((crime, index) => (
                      <label key={index}>
                        <input
                          type="checkbox"
                          value={crime}
                          onChange={handleCheckboxChange}
                          checked={selectedCrimes.includes(crime)}
                        />
                        {crime}
                      </label>
                    ))}
                  </div>
                )}

                {/* Display the selected crimes */}
                <p>Selected Crimes: {selectedCrimes.join(', ') || 'None'}</p>
              </div>

              <label>
                Imprisonment Served
                <input type="text" placeholder="Years of imprisonment" />
              </label>
              <label>
                Bail Bond
                <input type="text" placeholder="Bail Bond" />
              </label>
              <label>
                Surety Bond
                <input type="text" placeholder="Surety Bond" />
              </label>
              <button className="submit-button" type="submit">Submit Details</button>
            </form>
          </div>

          <div className="nlp-results">
            <h3>NLP & ML Results</h3>
            <label>
              Information Extracted by NLP
              <textarea placeholder="Information Extracted by NLP"></textarea>
            </label>
            <div className="ml-prediction">
              <p>ML Prediction: Bail Eligibility</p>
              <label>
                <input type="radio" name="eligibility" value="eligible" />
                Eligible
              </label>
              <label>
                <input type="radio" name="eligibility" value="not-eligible" />
                Not Eligible
              </label>
            </div>
          </div>
        </div>

        <div className="recommendations">
          <h3>AI Recommendations</h3>
          <div className="recommendation-content">
            <div className="recommendation-left">
              <p>Based on the charges and case details, it is recommended to highlight the following points in the bail application:</p>
              <ul>
                <li>No prior criminal record</li>
                <li>Strong family ties in the community</li>
                <li>Employment history showing stability</li>
                <li>Health concerns requiring regular treatment</li>
              </ul>
            </div>
            <div className="recommendation-right">
              <p>Additional considerations:</p>
              <ul>
                <li>Possibility of electronic monitoring</li>
                <li>Willingness to surrender passport</li>
                <li>Proposed guarantor details</li>
                <li>Community service options</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="steps">
          <h3>Steps to Apply for Bail</h3>
          <ul>
            <li>Gather all necessary documents (ID, case file, medical records)</li>
            <li>Fill out the bail application form accurately</li>
            <li>Submit the application to the court or relevant authority</li>
            <li>Attend the bail hearing, presenting the case details and recommendations</li>
            <li>Follow up with the court for the bail decision</li>
          </ul>
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

export default UndertrialDashboard;
