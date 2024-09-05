import React from 'react';
import '../App.css';

const JudgeDecision = () => {
  return (
    <div className="judge-decision">
      <h2>Judge's Decision</h2>
      <button className="approve">Approve Bail</button>
      <button className="deny">Deny Bail</button>
    </div>
  );
};

export default JudgeDecision;