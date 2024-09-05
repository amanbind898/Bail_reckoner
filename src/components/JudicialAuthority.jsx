import React from 'react';
import DecisionSupport from './DecisionSupport';
import JudgeDecision from './JudgeDecision';
import '../App.css';
import CaseSelection from './CaseSelection';
import AIAnalysis from './AiAnalysis';

function JudicialAuthority() {
  return (
    <div className="JudicialAuthority">
      <header>
        <h1>Judicial Case System</h1>
      </header>
      <main>
        <CaseSelection />
        {/* <CaseSelection /> */}
        <div className="analysis-section">
          <AIAnalysis />
          <DecisionSupport />
        </div>
        <JudgeDecision />
      </main>
    </div>
  );
}

export default JudicialAuthority;