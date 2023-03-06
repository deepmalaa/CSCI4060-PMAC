import React from 'react';
import '../styles/StatusPage.css';

function Details({ application }) {

  const goBack = () => {
    window.history.back();
  }

  if(application.status === 'Denied'){
    return (
      <div className="details-container">
        <h2 className="details-title">{application.title}</h2>
        <button onClick={goBack}>Back</button>
        <div className="details-content">
          <div className="details-icon-container">
            <img className="details-icon" src={application.icon} alt="Application icon" />
          </div>
          <div className="details-info-container">
            <p className="details-info">Status: {application.status}</p>
            <p className="details-info">Submission Date: {application.submissionDate}</p>
            <p className="details-info">Feedback: </p>
          </div>
        </div>
      </div>
    );
  }

  if(application.status === 'Incomplete'){
    return (
      <div className="details-container">
        <h2 className="details-title">{application.title}</h2>
        <button onClick={goBack}>Back</button>
        <div className="details-content">
          <div className="details-icon-container">
            <img className="details-icon" src={application.icon} alt="Application icon" />
          </div>
          <div className="details-info-container">
            <p className="details-info">Status: {application.status}</p>
            <p className="details-info">Application is Incomplete.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h2 className="details-title">{application.title}</h2>
      <div className="details-content">
        <div className="details-icon-container">
          <img className="details-icon" src={application.icon} alt="Application icon" />
        </div>
        <div className="details-info-container">
          <p className="details-info">Status: {application.status}</p>
          <p className="details-info">Submission Date: {application.submissionDate}</p>
          <p className="details-info">Interview Status: {application.interviewStatus}</p>
        </div>
      </div>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Details;