import React, { useState } from 'react';
import '../styles/StatusPage.css';

function ApplicationSelector(props) {

  // used for status box visuals on statusPage 
  const statusClassNames = {
    Pending: 'status--pending',
    Interview: 'status--interview',
    Denied: 'status--denied',
    Complete: 'status--complete',
    Accepted: 'status--accepted',
  };

  // Determines what applications types are true for verified 
  const submittedApplicationList = Object.keys(props.applications)
    .filter(application => props.applications[application].verified);
  
    // Only displays true to verified 
  const handleSelect = (application) => {
    props.onChange(application);
  };

  return (
    <body className='background'>
      <div className='container'>
        {submittedApplicationList.length === 0 ? (
          <p className='no-applications'>No applications found.</p>
        ) : (
          <div className='application-container'>
            {submittedApplicationList.map(application => (
              <div key={application} className='application-box' onClick={() => handleSelect(application)}>
                
                <div className='title'>{props.applications[application].title}</div>
                
           
                <div className='date'>Date: {props.applications[application].submissionDate}</div>
                <div className='name'>Name: {props.applications[application].name}</div>


                <div className={`status ${statusClassNames[props.applications[application].status]}`}>
                  {props.applications[application].status}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </body>
  );
}

export default ApplicationSelector;