import React from 'react';
import './App.css';
import allopathicIcon from './component/video/twosnakes.png';
import osteopathicIcon from './component/video/onesnake.png';
import physicianAssistantIcon from './component/video/physician.png';
import dentalIcon from './component/video/tooth.png';
import otherIcon from './component/video/other.png';

function ApplicationSelector(props) {
  const submittedApplications = {
    application1: { verified: true, title: 'Allopathic Medical Application', status: 'Pending', icon: allopathicIcon },
    application2: { verified: true, title: 'Osteopathic Medical Application', status: 'Accepted', icon: osteopathicIcon },
    application3: { verified: true, title: 'Physician Assistant Application', status: 'Denied', icon: physicianAssistantIcon },
    application4: { verified: false, title: 'Dental Application', status: 'Pending', icon: dentalIcon },
    application5: { verified: false, title: 'Other(ex: Podiatry) Application', status: 'Denied', icon: otherIcon },
  };
  const submittedApplicationList = Object.keys(submittedApplications)
    .filter(application => submittedApplications[application].verified);

  return (
    <body>
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', color:'black', gap: "75px"}}>
        
        <div style={{marginBottom: '10px', fontSize: '25pt', size:'24pt'}}>
          Submitted Applications:
        </div>

        {submittedApplicationList.length === 0 ? (
          <p className='application-none'>No applications found.</p>
        ) : (
          <div id="application-container" className='application-container-style'>
            {submittedApplicationList.map(application => (
              <div key={application} className="application-box" onClick={() => props.onChange(application)} style={{backgroundColor: submittedApplications[application].status === 'Pending' ? 'lightyellow' : submittedApplications[application].status === 'Denied' ? 'salmon' : 'lightgreen'}}>
                
                <div style={{display: 'flex', alignItems: 'center', fontSize: '16pt', fontStyle: 'oblique'}}>
                  <img src={submittedApplications[application].icon} alt={submittedApplications[application].title} style={{width: '60px', marginRight: '10px'}} />
                  {submittedApplications[application].title}
                </div>
              
                <div style={{position: 'absolute', top: '-25px', left: '0', padding: '5px', borderRadius: '5px', backgroundColor: submittedApplications[application].status === 'Pending' ? 'orange' : submittedApplications[application].status === 'Denied' ? 'red' : 'green', color: 'white', fontWeight: 'bold'}}>
                  {submittedApplications[application].status}
                </div>
                
                <button style={{marginRight: '10px', fontStyle:'bold', width: '120px', height: '50px'}}>
                  {submittedApplications[application].status === 'Pending' ? 'Details' : submittedApplications[application].status === 'Denied' ? 'Details' : 'Schedule Interview'}
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