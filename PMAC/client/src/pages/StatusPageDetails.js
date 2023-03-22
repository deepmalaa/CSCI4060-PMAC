import React, { useState } from 'react';
import '../styles/StatusPage.css';
import Calendar from './Calendar';

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
    score,
  } = application;

  // Used to create checkbox placement buttons. Allows for checkbox selection identification
  const days = ['Monday', 'Wednesday', 'Thursday', 'Friday'];
  const steps = ['Pending', 'Accepted', 'Interview', 'Complete'];


  let calendarOption;
  if(status === 'Accepted') {
    if(interviewStatus === false) {
      calendarOption = (
      <>
        <p style={{margin:'20px'}}> Note: No Interview times have been selected for this application. Please select avaliable Interview times! If no interview time is selected, interview scheduling cannot proceed</p>
        <Calendar days={days}/>
 
      </>
      );
    }
    else {
      calendarOption = (
      <>
        <p style={{marginTop:'20px'}}> Note: Your interview avaliability has been submitted for this application. An offical interview schedule is being proccessed at this time.</p>
      </>
      );
    }
  }
  else {
    calendarOption = ('');
  }

  let content;
  switch (status) {
    
    case 'Pending':
      content = (
        <>
          <p className='content'>Application: {application.title}</p>
          <p className='content'>Name: </p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>
        </>
      );
      break;

    case 'Denied':
      content = (
        <>
          <p className='content'> Application: {application.title}</p>
          <p className='content'>Name: </p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>
          <p className='content'>Feedback: {feedback}</p>
        </>
      );
      break;

    case 'Accepted':
      content = (

        <>
          <p className='content'> Application: {application.title}</p>
          <p className='content'>Name: </p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>
          <p className='content'>Interview Scheduled: {interviewStatus ? 'Yes' : 'No'}</p>
        </>
      );
      break;

      case 'Interview':
        content = (
          <>
            <p className='content'>{application.title}</p>
            <p className='content'>Name: </p>
            <p className='content'>Status: {status}</p>
            <p className='content'>Submission Date: {submissionDate}</p>
            <p className='content'>Interview Scheduled: {interviewStatus ? 'Yes' : 'No'}</p>
            <p className='content'>Interview Date: {interviewDate}</p>
            <p className='content'>Interview Time: {interviewTime}</p>
          </>
        );
        break;

    case 'Complete':
      content = (
        <>
          <p className='content'>{application.title}</p>
          <p className='content'>Name: </p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>
          <p className='content'>Overall Score: {score}</p>
          <p className='content'>Interview Date: {interviewDate}</p>
          <p className='content'>Interview Time: {interviewTime}</p>
        </>
      );
      break;
  }

  
  return (
    <div className="process-container">
      <ul className="process-steps" style={{marginTop:'20px'}}>
        <li className={`step pending ${status === 'Pending' ? 'active' : ''}`}>Pending</li>
        <li className={`step accepted ${status === 'Accepted' ? 'active' : ''}`}>Accepted</li>
        <li className={`step interview ${status === 'Interview' ? 'active' : ''}`}>Interview</li>
        <li className={`step complete ${status === 'Complete' ? 'active' : ''}`}>Complete</li>
      </ul>
      <div className="content-container">
        {content}
        {calendarOption}
      </div>
    </div>
  );
}

export default Details;