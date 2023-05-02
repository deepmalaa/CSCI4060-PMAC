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
  const steps = ['Pending', 'Accepted', 'Interview', 'Complete'];

  // Calendar option to diplay (calendar/no calandar) depending on user
  let calendarOption;

  if(status === 'Accepted') {
    // If no interview times are selected by candidate will display calendar
    if(interviewStatus === false) {
      calendarOption = (
      <>
        <p style={{margin:'20px'}}> Note: No Interview times have been selected for this application. Please select avaliable Interview times! If no interview time is selected, interview scheduling cannot proceed</p>
 
      </>
      );
    }
    // If interview times are selected by candidate normal information will appear
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

  // content to display certain content for viewer depending on status
  let content;
  switch (status) {
    
    case 'Pending':
      content = (
        <>
          <ProgressSteps status="Pending" />
          <p className='content'>Application: {application.title}</p>
          <p className='content'>Name: {application.name}</p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>
        </>
      );
      break;

    case 'Denied':
      content = (
        <>
          <p className='content'> Application: {application.title}</p>
          <p className='content'>Name: {application.name}</p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>

        </>
      );
      break;

    case 'Accepted':
      content = (

        <>
          <ProgressSteps status="Accepted" />
          <p className='content'> Application: {application.title}</p>
          <p className='content'>Name: {application.name}</p>
          <p className='content'>Status: {status}</p>
          <p className='content'>Submission Date: {submissionDate}</p>

        </>
      );
      break;

      case 'Interview':
        content = (
          <>
            <ProgressSteps status="Interview" />
            <p className='content'>{application.title}</p>
            <p className='content'>Name: {application.name}</p>
            <p className='content'>Status: {status}</p>
            <p className='content'>Submission Date: {submissionDate}</p>

          </>
        );
        break;

    case 'Complete':
      content = (
        <>
          <ProgressSteps status="Complete" />
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
        {calendarOption}
      </div>
    </div> 
  );
}

export default Details;