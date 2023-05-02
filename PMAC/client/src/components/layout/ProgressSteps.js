import React from 'react';
import '../../styles/ProgressSteps.css';

const ProgressSteps = ({ status }) => {
  return (
    <div className="process-container">
      <ul className="process-steps">
        {status === 'Waiver' ? (
          <li className={`step waiver active`}>
            Incomplete
            <div className={`step-status active`}>
              <div className="step.waiver.active"></div>
            </div>
          </li>
        ) : (
          <li className={`step waiver ${status === 'Waiver' ? 'active' : ''}`}>
            Submitted
            <div className={`step-status ${status === 'Waiver' ? 'active' : ''}`}>
              <div className="step.waiver.active"></div>
            </div>
          </li>
        )}
        <li className={`step pending ${status === 'Pending' ? 'active' : ''}`}>
          Pending
          <div className={`step-status ${status === 'Pending' ? 'active' : ''}`}>
            <div className="step.pending.active"></div>
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