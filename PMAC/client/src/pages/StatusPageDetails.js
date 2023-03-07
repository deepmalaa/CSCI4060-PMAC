import React from 'react';
import '../styles/StatusPage.css';

function Details({ application }) {


  if (application.status === 'Denied') {
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
            <p className="details-info">Feedback: {application.feedback}</p>
          </div>
        </div>
      </div>
    );
  }

  if (application.status === 'Incomplete') {
    return (
      <div className="details-container">
        <h2 className="details-title">{application.title}</h2>
        <div className="details-content">
          <div className="details-icon-container">
            <img className="details-icon" src={application.icon} alt="Application icon" />
          </div>
          <div className="details-info-container">
            <p className="details-info">Status: {application.status}</p>
            <p className="details-info">Application is Incomplete: {application.missingInfo}</p>
          </div>
        </div>
      </div>
    );
  }
  if (application.status === 'Accepted' && application.interviewStatus) {
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
            <p className="details-info">Interview Scheduled: {application.interviewScheduled}</p>
            <p className="details-info">Interview Date: {application.interviewDate}</p>
            <p className="details-info">Interview Time: {application.interviewTime}</p>
            <p className="details-info">Interview Location: {application.interviewLocation}</p>
          </div>
        </div>
      </div>
    );
  }

  if (application.status === 'Complete') {
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
            <p className="details-info">Interview Scheduled: {application.interviewStatus ? "Yes" : "No"}</p>
            <p className="details-info">Overall Score: {application.score}</p>
            <p className="details-info">Interview Date: {application.interviewDate}</p>
            <p className="details-info">Interview Time: {application.interviewTime}</p>
          </div>
        </div>
      </div>
    )
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
    </div>
  );
}

export default Details;
