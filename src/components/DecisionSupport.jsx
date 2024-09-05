import React from 'react';
import '../App.css';

const DecisionSupport = () => {
  return (
    <div className="decision-support">
      <h2>Decision Support</h2>
      <p><strong>Recommendation:</strong> Deny Bail</p>
      <p><strong>Reason:</strong> High risk of non-compliance with court dates.</p>
      <p><strong>Suggested Actions:</strong> Increase surveillance and monitoring if bail is granted.</p>
    </div>
  );
};

export default DecisionSupport;