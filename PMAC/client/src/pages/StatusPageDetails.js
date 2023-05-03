import React, { useState } from 'react';
import '../styles/StatusPage.css';
import ProgressSteps from '../components/layout/ProgressSteps';


function Details({ application }) {
  // Extra appication info (might add back to status page info to pull)
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
    score,
  } = application;

  // Used to create checkbox placement buttons. Allows for checkbox selection identification
  const days = ['Monday', 'Wednesday', 'Thursday', 'Friday'];
  const steps = ['Wavier', 'Pending', 'Complete'];

  // Calendar option to diplay (calendar/no calandar) depending on user
  let calendarOption;

  // content to display certain content for viewer depending on status
  let content;
  switch (status) {
    
    case 'Pending':
      content = (
        <>
          <p className='content'>Application: {application.title}</p>
          <p className='content'>Name: {application.name}</p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>
          <p className='content'>Note: Please refer to the Status Bar on the home page to ensure all tasks are completed.</p>
        </>
      );
      break;

    case 'Incomplete':
      content = (
        <>
          <p className='content'> Application: {application.title}</p>
          <p className='content'>Name: {application.name}</p>
          <p className='content'>Status: Incomplete (Note: Application cannot be reviewed until completed) </p>
        </>
      );
      break;
    

    case 'Complete':
      content = (
        <>
          <p className='content'>{application.title}</p>
          <p className='content'>Name: {application.name}</p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>

        </>
      );
      break;
  }

  // Returns a visual guide on application process aswell as application info
  return (
    <div className="process-container">
      <div className="content-container">      
        {content}
      </div>
    </div> 
  );
}

export default Details;