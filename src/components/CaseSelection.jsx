import React, { useState } from 'react';
import '../App.css';

const CaseSelection = () => {
  const [caseNumber, setCaseNumber] = useState('');

  const handleAnalyze = () => {
    alert(`Analyzing case: ${caseNumber}`);
  };

  return (
    <div className="case-selection">
      <h2>Case Selection</h2>
      <input
        type="text"
        placeholder="Enter Case Number"
        value={caseNumber}
        onChange={(e) => setCaseNumber(e.target.value)}
      />
      <button onClick={handleAnalyze}>Analyze Case</button>
    </div>
  );
};

export default CaseSelection;