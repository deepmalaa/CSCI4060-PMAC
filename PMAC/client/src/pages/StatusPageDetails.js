import React, { useState } from 'react';
import '../styles/StatusPage.css';

function Details({ application }) {
  const {
    title,
    status,
    submissionDate,
    feedback,
    missingInfo,
    interviewStatus,
    interviewScheduled,
    interviewDate,
    interviewTime,
    interviewLocation,
    score,
  } = application;

  const steps = ['Pending', 'Accepted', 'Interview', 'Complete'];

  const activeStepIndex = steps.indexOf(status);
  const completedSteps = steps.slice(0, activeStepIndex);
  const remainingSteps = steps.slice(activeStepIndex);

  let content;
  switch (status) {
    
    case 'Pending':
      content = (
        <>
          <p>{application.title}</p>
          <p>Status: {status}</p>
          <p>Submission Date: {submissionDate}</p>
        </>
      );

    case 'Denied':
      content = (
        <>
          <p>{application.title}</p>
          <p>Status: {status}</p>
          <p>Submission Date: {submissionDate}</p>
          <p>Feedback: {feedback}</p>
        </>
      );
      break;

    case 'Accepted':
      content = (
        <>
          <p>{application.title}</p>
          <p>Status: {status}</p>
          <p>Submission Date: {submissionDate}</p>
          {interviewStatus }
        </>
      );
      break;

      case 'Interview':
        content = (
          <>
            <p>{application.title}</p>
            <p>Status: {status}</p>
            <p>Submission Date: {submissionDate}</p>
            <p>Interview Scheduled: {interviewStatus ? 'Yes' : 'No'}</p>
            <p>Overall Score: {score}</p>
            <p>Interview Date: {interviewDate}</p>
            <p>Interview Time: {interviewTime}</p>
          </>
        );
        break;

    case 'Complete':
      content = (
        <>
          <p>{application.title}</p>
          <p>Status: {status}</p>
          <p>Submission Date: {submissionDate}</p>
          <p>Interview Scheduled: {interviewStatus ? 'Yes' : 'No'}</p>
          <p>Overall Score: {score}</p>
          <p>Interview Date: {interviewDate}</p>
          <p>Interview Time: {interviewTime}</p>
        </>
      );
      break;
    default:
      content = (
        <>
          <p>Status: {status}</p>
          <p>Submission Date: {submissionDate}</p>
        </>
      );
  }

  if (status === 'Denied') {
    return (
      <div className="process-container">
        <div className="content-container" style={{margin:'20px'}}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="process-container">
      <ul className="process-steps">
        <li className={`step pending ${status === 'Pending' ? 'active' : ''}`}>Pending</li>
        <li className={`step accepted ${status === 'Accepted' ? 'active' : ''}`}>Accepted</li>
        <li className={`step interview ${status === 'Interview' ? 'active' : ''}`}>Interview</li>
        <li className={`step complete ${status === 'Complete' ? 'active' : ''}`}>Complete</li>
      </ul>
      <div className="content-container">
        {content}
      </div>
    </div>
  );
}

export default Details;