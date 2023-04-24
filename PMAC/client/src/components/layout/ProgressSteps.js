import React from 'react';
import '../../styles/ProgressSteps.css'

const ProgressSteps = ({ status }) => {
  return (
    <div className="process-container">
      <ul className="process-steps">
        <li className={`step pending ${status === 'Pending' ? 'active' : ''}`}>
          Pending
          <div className={`step-status ${status === 'Pending' ? 'active' : ''}`}>
            <div className="step.pending.active"></div>
          </div>
        </li>
        <li className={`step accepted ${status === 'Accepted' ? 'active' : ''}`}>
          Accepted
          <div className={`step-status ${status === 'Accepted' ? 'active' : ''}`}>
            <div className="step.accepted.active"></div>
          </div>
        </li>
        <li className={`step interview ${status === 'Interview' ? 'active' : ''}`}>
          Interview
          <div className={`step-status ${status === 'Interview' ? 'active' : ''}`}>
            <div className="step.interview.active"></div>
          </div>
        </li>
        <li className={`step complete ${status === 'Complete' ? 'active' : ''}`}>
          Complete
          <div className={`step-status ${status === 'Complete' ? 'active' : ''}`}>
            <div className="step.complete.active"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProgressSteps;