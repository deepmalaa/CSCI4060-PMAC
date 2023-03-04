import React, { useState} from 'react';
import './App.css';

function ApplicationSelector(props) {
 
  const submittedApplicationList = Object.keys(props.applications)
    .filter(application => props.applications[application].verified);

    const handleSelect = (application) => {
      props.onChange(application);
    };
    

    return (
      <body>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', color:'black', gap: "75px"}}>
          <div style={{marginBottom: '10px', fontSize: '25pt', size:'24pt'}}>
            Submitted Applications:
          </div>
          {submittedApplicationList.length === 0 ? (
            <p className='application-box'>No applications found.</p>
          ) : (
            <div id="application-container" className='application-container-style'>
              {submittedApplicationList.map(application => (
                <div key={application} className="application-box" onClick={() => handleSelect(application)} style={{backgroundColor: props.applications[application].status === 'Pending' ? 'lightyellow' : props.applications[application].status === 'Denied' ? 'salmon' : props.applications[application].status === 'Incomplete' ? 'salmon' : props.applications[application].status ==='Complete' ? 'lightblue' : 'lightgreen'}}>
                  <div style={{display: 'flex', alignItems: 'center', fontSize: '16pt', fontStyle: 'oblique'}}>
                    <img src={props.applications[application].icon} alt={props.applications[application].title} style={{width: '60px', marginRight: '10px'}} />
                    {props.applications[application].title}
                  </div>
                  <div style={{position: 'absolute', top: '-25px', left: '0', padding: '5px', borderRadius: '5px', backgroundColor: props.applications[application].status === 'Pending' ? 'orange' : props.applications[application].status === 'Denied' ? 'red' : props.applications[application].status === 'Incomplete' ? 'red' : props.applications[application].status === 'Complete' ? 'blue' : 'green', color: 'white', fontWeight: 'bold'}}>
                    {props.applications[application].status}
                  </div>
                  <button style={{marginRight: '10px', fontStyle:'bold', width: '120px', height: '50px'}}>
                    {props.applications[application].status === 'Pending' ? 'Details' : props.applications[application].status === 'Denied' ? 'Details' : props.applications[application].status === 'Incomplete' ? 'Details' : props.applications[application].status === 'Complete' ? 'Details' : props.applications[application].status === 'Accepted' && props.applications[application].interviewStatus === false ? 'Schedule Interview' :'Details'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </body>
    );
  }
  
  export default ApplicationSelector;
